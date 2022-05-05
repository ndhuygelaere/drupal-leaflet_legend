/**
 * We are overriding the adding features functionality of the Leaflet module.
 */

(function($, Drupal, drupalSettings) {
    $(document).on('leafletMapInit', function(e, settings, lMap, mapid) {
        items = [];
        markers_type = [];
        //Manage markers layer 
        //fix me manage case when the marker is not an image
        //console.log(settings);
        //console.log(lMap);
        //console.log(mapid);
        $.each(Drupal.Leaflet[mapid].markers, function(i, val){
            if(markers_type.indexOf(val._icon.src) === -1){
                markers_type.push(val._icon.src);
                items.push({
                    label: "Marker" + markers_type.length,
                    type: "image",
                    url: val._icon.src
                });
            }
        });
        //Manage WMS Layers
        $.each(settings.layers, function(i, val){
            if(typeof val.legend !==  "undefined" && val.legend){
                items.push(val.legend);
            }
        } );
        //see : https://github.com/ptma/Leaflet.Legend
        L.control.Legend({
            position: "bottomleft",
            //title
            //opacity
            //symbolWidth
            //symbolHeight
            //column
            collapsed:true,
            legends: items
        }).addTo(lMap);
        
    });
    
    
})(jQuery, Drupal, drupalSettings);



