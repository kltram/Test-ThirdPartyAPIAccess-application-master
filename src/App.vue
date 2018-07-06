<template>
  <div id="app">
    <div  style="max-width: 1200px;margin: 0 auto;border: solid 0.5px; padding-bottom: 15px; padding-left: 15px;">
     <h1> To Test 3rd Party API Access - Demo Test Application</h1>
      <router-link to="/Home">Home</router-link>
      <router-link to="/ThirdAPI">ThirdAPI</router-link>
      <router-link to="/RestCall">RestCall</router-link>
    </div>
    <div  style="    max-width: 800px;   margin: 0 auto;"><router-view></router-view></div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
