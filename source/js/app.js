(function() {

  // hamburger //

  var hamburger = document.querySelector('.hamburger'),
      nav = document.querySelector('.nav-box');
  hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.add('block');
  });
  document.querySelector('.nav-box_hamburger').addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.remove('block');
  });

  // end hamburger //
  // map //

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'),
        {
          center: {lat: 50.398855, lng: 30.624255},
          zoom: 18
        });
  }

  var marker = new google.maps.Marker({
    position: {lat: 50.398855, lng: 30.624255},
    map: map
  });

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.398855, lng: 30.624255},
    zoom: 14,
    styles:[
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          },
          {
            "gamma": "7.29"
          },
          {
            "lightness": "-35"
          },
          {
            "saturation": "-100"
          },
          {
            "weight": "0.82"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "hue": "#ff00e9"
          },
          {
            "gamma": "10.00"
          },
          {
            "saturation": "-8"
          },
          {
            "lightness": "-94"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          },
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#4eff00"
          },
          {
            "saturation": "27"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "saturation": "-28"
          },
          {
            "hue": "#00ff68"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "saturation": "-100"
          },
          {
            "lightness": "46"
          },
          {
            "gamma": "1.36"
          },
          {
            "weight": "4.18"
          },
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "weight": "8.40"
          },
          {
            "gamma": "6.02"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#86a77a"
          },
          {
            "visibility": "simplified"
          },
          {
            "weight": "0.07"
          },
          {
            "gamma": "1.31"
          }
        ]
      }
    ]
  });

  // end map //
})();

