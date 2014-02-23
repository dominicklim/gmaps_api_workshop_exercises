##(Google Maps) API Workshop Exercises

###What It Is

The goal of this workshop is to gently introduce APIs via the Google Maps API. These are the exercise files that accompany the workshop.

###Pre-reqs (In Order of Importance)

- Object-oriented programming (CS 61A): [quick review](http://www-inst.eecs.berkeley.edu/~cs61a/sp14/disc/discussion06.pdf)
- JavaScript: [quick start](http://www.codecademy.com/courses/javascript-intro/0/1)
- Know what a [callback](http://www.impressivewebs.com/callback-functions-javascript/) is
- Basic knowledge of HTML and CSS: [quick review](http://learn.shayhowe.com/html-css/)
- [Google Maps API v3 key](https://code.google.com/apis/console)

###Usage

Get these files however you like: clone this repo or click the "Download Zip" button to the right. We'll work through these exercise together.


###[Google Maps JavaScript API v3 Reference](https://developers.google.com/maps/documentation/javascript/reference?hl=en)

- When using a constructor, follow this pattern (don't forget the google.maps at the beginning):

		var center = new google.maps.LatLng(SODA_LAT, SODA_LONG);
- If a constructor is not given in the documentation, set the properties using the JavaScript object literal:

		var mapOptions = {
		  center: center,
		  zoom: 8
		};
- If you get stuck, ask for help!

###Exercises and Relevant Documentation

1. Hello Map: A simple map centered on our second home.
	- [LatLng](https://developers.google.com/maps/documentation/javascript/reference?hl=en#LatLng)
	- [MapOptions](https://developers.google.com/maps/documentation/javascript/reference?hl=en#MapOptions)
	- [Map](https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map)
2. (Geo)Coder: A tool for discovering the latitude and longitude of addresses.
	- [Geocoder](https://developers.google.com/maps/documentation/javascript/reference?hl=en#Geocoder)
	- [GeocoderRequest](https://developers.google.com/maps/documentation/javascript/reference#GeocoderRequest)
	- [GeocoderResult](https://developers.google.com/maps/documentation/javascript/reference?hl=en#GeocoderResult)
	- [Marker](https://developers.google.com/maps/documentation/javascript/reference?hl=en#Marker)
3. Listen for the Click (Events): An introduction to event listeners.
	- [event](https://developers.google.com/maps/documentation/javascript/reference?hl=en#event)
	- (The Events section of) [Map](https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map)
4. Stylin' On 'Em: Paint the globe blue and gold. You mad?
	- [MapTypeStyler](https://developers.google.com/maps/documentation/javascript/reference?hl=en#MapTypeStyler)
	- [MapTypeStyle](https://developers.google.com/maps/documentation/javascript/reference?hl=en#MapTypeStyle)
	- [StyledMapTypeOptions](https://developers.google.com/maps/documentation/javascript/reference?hl=en#StyledMapTypeOptions)
	- [StyledMapType](https://developers.google.com/maps/documentation/javascript/reference?hl=en#StyledMapType)
	- (The Properties section of) [Map](https://developers.google.com/maps/documentation/javascript/reference?hl=en#Map)
	- [MapTypeRegistry](https://developers.google.com/maps/documentation/javascript/reference?hl=en#MapTypeRegistry)
5. Hello Neighbors: Mark some of our fellow bay area universities.
	- [MarkerShape](https://developers.google.com/maps/documentation/javascript/reference#MarkerShape)
	- [Size](https://developers.google.com/maps/documentation/javascript/reference#Size)
	- [Icon](https://developers.google.com/maps/documentation/javascript/reference#Icon)
6. What's the Weather Like?: A tool for checking the weather.
	- [Libraries](https://developers.google.com/maps/documentation/javascript/libraries)
	- [WeatherLayer](https://developers.google.com/maps/documentation/javascript/reference#WeatherLayer)
	- [CloudLayer](https://developers.google.com/maps/documentation/javascript/reference#CloudLayer)
7. Directions: Google Maps Super Lite.
	- [DirectionsService](https://developers.google.com/maps/documentation/javascript/reference#DirectionsService)
	- [DirectionsRendererOptions](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRendererOptions)
	- [DirectionsRenderer](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer)
	- [DirectionsRequest](https://developers.google.com/maps/documentation/javascript/reference#DirectionsRequest)
8. Take it to the Streets (Street View): A side-by-side comparison of overhead and street views.
	- [StreetViewPov](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPov)
	- [StreetViewPanoramaOptions](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanoramaOptions)
	- [StreetViewPanorama](https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama)