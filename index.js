import { loadModules } from 'esri-loader';

import 'arcgis-js-api/css/main.css';
import 'arcgis-js-api/css/view.css';
import './styles.css'

loadModules(['esri/Map', 'esri/views/MapView']).then(([Map, MapView]) => {
    const map = new Map({
        basemap: 'streets'
    });

    const view = new MapView({
        container: 'app',
        map: map
    })
})