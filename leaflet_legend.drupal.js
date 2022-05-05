/**
 * We are overriding the adding features functionality of the Leaflet module.
 */

(function($, Drupal, drupalSettings) {
    $(document).on('leafletMapInit', function(e, settings, lMap, mapid) {
        
        //console.log(mapid);
        items = [];
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



