/* Gmap */

function initMap() {
    var uluru = {lat: 36.734579, lng: -119.779382};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  /* end of Gmap */