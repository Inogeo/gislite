

// Adding JS libraries
import L from 'leaflet';
import 'leaflet-switch-basemap'

class LeafletMapManager {

    // Render a map with sufficient controls and base layers
    constructor(map_container, config){
        // Leaflet map initialization
        this.Lmap = L.map(map_container.toString(), { attributionControl: true, zoomControl: false })
        this.Lmap.setView(config.map.init_coords, config.map.init_zoom_lvl);

        // Leaflet zoom control button
        L.control.zoom({ position: 'topright' }).addTo(this.Lmap);
        
        // Leaflet map boundaries
        var southWest = L.latLng(config.map.bbox[0][0], config.map.bbox[0][1]), northEast = L.latLng(config.map.bbox[1][0], config.map.bbox[1][1]);
        var bounds = L.latLngBounds(southWest, northEast);
        this.Lmap.setMaxBounds(bounds)

        // Leaflet zoom boundaries
        config.map.minZoom = config.map.min_zoom;

        // Adding background layer. This code uses the L.switchBasemap plugin
        // URL: https://github.com/clavijojuan/L.switchBasemap
        var background_layers_objs = []
        for (var i = 0; i < config.background_layers.length; i++) {
            var background_layer = config.background_layers[i]
            var background_layer_obj = {
                layer: L.tileLayer(background_layer.src, {
                    attribution: background_layer.attribution,
                    maxZoom: config.map.max_zoom,
                }), //DEFAULT MAP
                icon: background_layer.icon,
                name: background_layer.name
            }
            if(i==0){
                background_layer_obj.layer.addTo(this.Lmap) 
            }
            background_layers_objs.push(background_layer_obj)
        }
        new L.basemapsSwitcher(background_layers_objs, { position: 'bottomright' }).addTo(this.Lmap)
        setTimeout(this.Lmap.invalidateSize,2000)
    }

    addLayer(){
        // This function adds a layer to a map and to the legend

    }

    removeLayer(){
        // This function adds a layer to a map and to the legend

    }

}

export default LeafletMapManager;

