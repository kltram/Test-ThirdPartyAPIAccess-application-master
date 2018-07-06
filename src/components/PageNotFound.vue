<template>
  <div class="err">
    <h1>{{ msg }}</h1>
    <span>The user requested url is not found!!!</span>
  </div>
</template>
<style>
  .err{
    color: #FF0000;
    text-align: center;
  }

</style>
<script>
  export default {
    name: '404',
    data () {
      return {
        msg: 'Page Not Found(404).'
      }
    }
  }
</script>
