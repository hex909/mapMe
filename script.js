
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VzdW1hIiwiYSI6ImNrdGszM2YyazAydm4yd21rY3Y5NHl2aW0ifQ.F1vbr6_O5eKGfr4chw48-Q';

let apiLink ="https://ipapi.co/json"
/*
fetch(apiLink).then(rep =>{
  return rep.json()
}).then(e =>{
  //infi = JSON.parse(e)
  
  console.log(e.longitude,e.latitude)
  showMe(e.longitude,e.latitude)
}).catch(err =>{
  console.log(err.message)
})*/

navigator.geolocation.getCurrentPosition(sucessLoc, errLoc, {
  enableHighAccuracy: true
})

function sucessLoc(position){
  showMe([position.coords.longitude,position.coords.latitude])
}

function errLoc() {
  showMe([-2,11])
}

function showMe(positions){
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: positions, // starting position [lng, lat]
    zoom: 15 // starting zoom
  });
  
    var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: 'metric',
  profile: 'mapbox/cycling'
});

map.addControl(directions, 'top-left');

    map.addControl(new mapboxgl.NavigationControl());
    
 map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));

}

map.addEventListener('click', () =>{
  setTimeout(function() {
    
  var navDir = document.querySelector('.directions-control-directions')
  var  navHead =  document.querySelector('.mapbox-directions-route-summary')
  
  if ( navHead != null){
    navHead.addEventListener("click", () =>{
      
      navDir.classList.toggle('apply')
    })
  }
  
  }, 1000);
})

  var tog = 0
//})


