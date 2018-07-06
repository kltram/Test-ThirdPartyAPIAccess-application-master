<template>
  <div class="about">
    <h1>Google Map API Used</h1>
	<input id="userLocation" class="controls" type="text" placeholder="Please enter the location">
    <div id="myMap" style=' height: 900px;'>
    </div>
    <div class="results">
      <section>
      </section>
    </div>
  </div>
</template>

<script>
import thirdPartyApi from './js/thirdPartyApi.js'
export default {
  name: 'About',
  data () {
    return {
      searchval: ""
    }
  },
   mounted() {
		var myMap = document.getElementById('myMap');
		var userLocation = document.getElementById('userLocation');
		thirdPartyApi.createMap(myMap, userLocation);
   }
}
</script>