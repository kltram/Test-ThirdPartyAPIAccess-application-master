<template>
  <div>
    <div style="    max-width: 1200px;    margin: 0 auto;">
		<div class='icondiv'><i v-show='loading' class='fa fa-spinner fa-spin fa-5x'></i></div>
	
      <div v-for="(item, i) in filmdata" class = "card">
        <h1>{{item.name}}, {{item.company}}</h1>
        <p>{{item.location}}</p>
		<a :href="item.blog">Blog</a>
      </div>
    </div>
  </div>
</template>
<style>
@import '../css/style.css'

</style>
<script>
import restcall from './js/restcall.js'
export default {
data () {
    return {
      filmdata: [],
	  loading: false
    }
  },
created () {
	this.loading = true;
	console.log('start')
    var res = restcall.getUser('octocat',this);
	console.log(res);
	console.log('finished')
  },
  methods:{
	returnfn(data){
		this.loading = false;
		console.log('call finished')
		this.filmdata = data
	}
  }

}

</script>
