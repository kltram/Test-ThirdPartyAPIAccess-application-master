module.exports = {
	createMap(myMap,userLocation){
		//By Default the Google MAP API pointing to Hong Kong (lat:22.3964, lng: 114.1095)
		try{
			var map= new google.maps.Map(myMap, {
			center: {lat:22.3964, lng: 114.1095},
			scrollwheel: true,
			zoom: 6
			})
			//Create the search box within the MAP View and link it to the UI element.
			var input = userLocation;
			var searchBox = new google.maps.places.SearchBox(input);
			// Here find the location based on user given location name exp: Hong Kong , Shenzhen , India, America etc.,
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
			google.maps.event.addListener(searchBox, 'places_changed', function() {
			 searchBox.set('map', null);
			 var places = searchBox.getPlaces();
		
			 var bounds = new google.maps.LatLngBounds();
			 var i, place;
			 for (i = 0; place = places[i]; i++) {
			   (function(place) {
				 var marker = new google.maps.Marker({

				   position: place.geometry.location
				 });
				 marker.bindTo('map', searchBox, 'map');
				 // Clear previous selected location mark
				 google.maps.event.addListener(marker, 'map_changed', function() {
				   if (!this.getMap()) {
					 this.unbindAll();
				   }
				 });
				 bounds.extend(place.geometry.location);
			   }(place));
			 }
			 //set the user searched location into UI 
			 map.fitBounds(bounds);
			 searchBox.set('map', map);
			 map.setZoom(Math.min(map.getZoom(),12));
		   });
		   return {}
		}catch(err){
			return {"err":err}
			
		}
		
	   
	   
	}
}