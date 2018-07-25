function addMarkersToMap(map) {
    var kizaMarker = new H.map.Marker({lat:1.29411, lng:36.79347});
    map.addObject(kizaMarker);
    
    
  }
  
  //Step 1: initialize communication with the platform
  var platform = new H.service.Platform({
    app_id: 'D1vJztKHgaTd6jyYo0xy',
    app_code: 'TFCxUTn2q0N2YctBINEZHA',
    useCIT: true,
    useHTTPS: true
  });
  var pixelRatio = window.devicePixelRatio || 1;
  var defaultLayers = platform.createDefaultLayers({
    tileSize: pixelRatio === 1 ? 256 : 512,
    ppi: pixelRatio === 1 ? undefined : 320
  });
  
  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map,{
    center: {lat:1, lng:36},
    zoom: 4,
    pixelRatio: pixelRatio
  });
  
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Use the map as required...
  addMarkersToMap(map);