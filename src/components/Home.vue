<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
<style>
  .hello{
    text-align: center;
  }

</style>
<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Home Page'
    }
  }
}
</script>
