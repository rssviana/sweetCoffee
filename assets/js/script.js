function initMap() {
    var uluru = {lat: -22.970722, lng: -43.182365};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        disableDefaultUI: true,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
