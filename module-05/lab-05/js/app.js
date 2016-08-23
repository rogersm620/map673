(function () {
    
    L.mapbox.accessToken = 'pk.eyJ1Ijoicm9nZXJzbTYyMCIsImEiOiJjaXI5cGxkMmUwMTJ5Z2Rua296aTN3NXFuIn0.GteABPXudsE0yuZGP_vquw';
    
    var map = L.mapbox.map('map', 'mapbox.streets', {           //map tiles stuff
        center: [-.23, 37.8],
        zoom: 7,
        minZoom: 6,
        maxBounds: L.latLngBounds([-6.22, 27.72],[5.76, 47.83])
    });
    
    var clincs = omnivore.csv('data/Health_Facilities.csv')      //load csv with omnivore  
                    .on('ready', function(e) {
                        drawMap(e.target.toGeoJSON());  
                    })
                    .on('error', function(e) {
                        console.log(e.error[0].message);
                    });
    
    var customLayer = L.geoJson(null, {
                // http://leafletjs.com/reference.html#geojson-style
            style: function(feature) {
            return { color: '#f00' };
            }
        });
                // this can be any kind of omnivore layer
    //var runLayer = omnivore.kml('line.kml', null, customLayer)  <---what is this for?
    
    var commonStyles = {
        weight: 1,
        stroke: 1,
        fillOpacity: .6,
        radius: 5
    };
    
    function drawMap(healthData) {          //markers are opposite description. 
                                            //issue between data and data description?
                                            //definently issue with data from report, not code issue 
        
        var keph4 = L.geoJson(healthData, {     //creates markers
                pointToLayer: function(feature, layer){
                    return L.circleMarker(layer, {
                        color: '#ffd92f',
                        opacity: .6,
                        weight: 2,
                        fillOpacity: .4,
                        radius: 5
                    });
                },
            
                filter: function(feature) {     //filters var results to only level 4
                if(feature.properties.facilityType == "4") {
                    return feature;
                }
            }
            }).addTo(map);
        
        var keph3 = L.geoJson(healthData, {     //creates markers
                pointToLayer: function(feature, layer){
                    return L.circleMarker(layer, {
                        color: '#e78ac3',
                        opacity: .6,
                        weight: 2,
                        fillOpacity: .4,
                        radius: 5
                    });
                },
            
                filter: function(feature) {     //filters var results to only level 3
                if(feature.properties.facilityType == "3") {
                    return feature;
                }
            }
            }).addTo(map);
        
        var keph2 = L.geoJson(healthData, {     //creates markers
                pointToLayer: function(feature, layer){
                    return L.circleMarker(layer, {
                        color: '#8da0cb',
                        opacity: .6,
                        weight: 2,
                        fillOpacity: .4,
                        radius: 5
                    });
                },
            
                filter: function(feature) {     //filters var results to only level 2
                if(feature.properties.facilityType == "2") {
                    return feature;
                }
            }
            }).addTo(map);
        
        var keph1 = L.geoJson(healthData, {     //creates markers
                pointToLayer: function(feature, layer){
                    return L.circleMarker(layer, {
                        color: '#fc8d62',
                        opacity: .6,
                        weight: 2,
                        fillOpacity: .4,
                        radius: 5
                    });
                },
            
                filter: function(feature) {     //filters var results to only level 1
                if(feature.properties.facilityType == "1") {
                    return feature;
                }
            }
            }).addTo(map);

        var sourcesLayers = {       //formatting for layer selector
            "<b style='color:#fc8d62'>KEPH 1</>": keph1,
            "<b style='color:#8da0cb'>KEPH 2</>": keph2,
            "<b style='color:#e78ac3'>KEPH 3</>": keph3,
            "<b style='color:#ffd92f; text-shadow: 0px 0px 1px #333;'>KEPH 4</>": keph4
        };
    
        L.control.layers(null, sourcesLayers, { collapsed:false }).addTo(map);      //add layer selector box
        drawInfo();     //draw info box
        
        keph1.eachLayer(function(layer) {           //add info box for each keph level (find better way...)
         
            layer.on('mouseover', function() {      //show info box on mouseover
                updateInfo(this);
                $(".info").show();
                
            });
            layer.on('mouseout', function() {       //remove info box on mouseout
                $(".info").hide();
                
            });
            });
        
        keph2.eachLayer(function(layer) {
         
            layer.on('mouseover', function() {      //show info box on mouseover
                updateInfo(this);
                $(".info").show();
                
            });
            layer.on('mouseout', function() {       //remove info box on mouseout
                $(".info").hide();
                
            });
            });
        
        keph3.eachLayer(function(layer) {
         
            layer.on('mouseover', function() {      //show info box on mouseover
                updateInfo(this);
                $(".info").show();
                
            });
            layer.on('mouseout', function() {       //remove info box on mouseout
                $(".info").hide();
                
            });
            });
        
        keph4.eachLayer(function(layer) {
         
            layer.on('mouseover', function() {      //show info box on mouseover
                updateInfo(this);
                $(".info").show();
                
            });
            layer.on('mouseout', function() {       //remove info box on mouseout
                $(".info").hide();
                
            });
            });
        
    }
    
    //pop up info window
    function drawInfo() {       //builds info box
            
        var info = L.control({position: 'bottomright'});       //placement
            
        info.onAdd = function(map) {
                
            var div = L.DomUtil.create('div', 'info'); //creates new div named info
                
            return div;
        }
        info.addTo(map);        //add to map
        $(".info").hide();      //hide initially
        }
        
        //update pop up info window
    function updateInfo(layer) {        //inserts updated info into info box
            
        var props = layer.feature.properties;
            
        var html = "<h3>"+ props['facilityName'] +"</h3>"+           //content
                    "County: <b>"+ props['County']+"</b><br>"+
                    "Sub-county: <b>"+ props['Division']+"</b><br>"+
                    "Ward: <b>"+ props['LOCATION']+"</b><br>"+
                    "Constituency: <b>"+ props['Constituency']+"</b><br>"+
                    "KEPH level: <b>"+ props['facilityType']+"</b>" 
            
        $(".info").html(html);      //insert content into div
    }
        
})();    
    
    