<template>
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
  <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
    <div class="mb-4">
      <h1 class="text-grey-darkest">Todo List</h1>
      <div class="flex mt-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" v-model="description" required>
        <button class="flex-no-shrink p-2 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500" @click="addTask">
          <span class="mdi mdi-plus"></span>
        </button>
      </div>
    </div>
    <div id="model_list">
      <div class="flex mb-4 items-center" v-for="model in models" v-bind:key="model.id">
        <template v-if="model.is_finish">
          <p class="w-full line-through text-green-500">{{ model.description }}</p>
          <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-red-500 text-gray-500 border-gray-300 hover:bg-gray-300">
            <span class="mdi mdi-close-box"></span>
          </button>
        </template>
        <template v-else>
          <p class="w-full text-gray-500">{{ model.description }}</p>
          <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-300 hover:bg-green-300">
            <span class="mdi mdi-check"></span>
          </button>
        </template>
        <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
          <span class="mdi mdi-delete"></span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
'use strict';
import axios from 'axios';
export default {
  name: 'Home',
  data: function () {
      return {
          models: [],
          description: ''
      }
  },
  methods: {
    getTask() {
      const api = 'https://todo.xsia.app/api/todos';
      const token = this.$store.state.token;
      axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        this.models = response.data;
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      });
    },
    addTask() {
      const api = 'https://todo.xsia.app/api/todos';
      const token = this.$store.state.token;
      if (this.description !== "") {
        axios.post(api, {
          description: this.description,
          is_finish: false
        }, {
          strictSSL: false,
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      this.getTask();
    },
    updateTask() {

    },
    deleteTask() {

    }
  },
  mounted() {
    this.getTask();
  }
};
</script>
