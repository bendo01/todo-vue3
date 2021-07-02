/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
		<form class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
			<svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-gray-600 mb-2" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
			</svg>
			<p class="mb-5 text-3xl uppercase text-gray-600">Login</p>
			<input type="email" name="email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" v-model="email" required>
			<input type="password" name="password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" v-model="password" required>
			<button class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" type="button" @click="loginUser"><span>Login</span></button>
		</form>
	</div>
</template>
<script>
'use strict';
import axios from 'axios';
export default {
    name: 'Login',
    data: function () {
        return {
            email: 'bendo01@gmail.com',
            password: 'sayatest',
            user: {},
            token:''
        }
    },
    methods: {
        loginUser() {
            if (this.email !== "" && this.password !== "") {
                // alert('Melakukan proses login');
                axios.post('https://todo.xsia.app/api/login', {
                    email: this.$data.email,
                    password: this.$data.password
                }, {
                    strictSSL: false,
                })
                .then(function (response) {
                    //console.log(response.data.token);
                    this.token = response.data.token;
                    this.user = response.data.user;
                    this.$store.dispatch('setToken', this.token);
                    this.$store.dispatch('setUser', this.user);
                    this.$store.dispatch('loggedIn');
                    this.$router.push({ name: 'Home'});
                    
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                alert('Input Anda Belum Lengkap');
            }
        }
    }
}
</script>