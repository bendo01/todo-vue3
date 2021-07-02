<template>
  <component :is="layout" />
</template>
<script>
import DefaultLayout from "@/layouts/Default";
import LoginLayout from "@/layouts/Login";
export default {
  name: 'App',
  components: {
    DefaultLayout,
    LoginLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout
      } else {
        this.layout = "DefaultLayout" // this is default layout if route meta is not set
      }
    },
  },
};
</script>