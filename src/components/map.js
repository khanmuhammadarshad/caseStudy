import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
    'pk.eyJ1Ijoia2hhbm11aGFtbWFkYXJzaGFkIiwiYSI6ImNrZnViMzhuZTBzbWMycW1qeDEzOXZrd3oifQ.zEpWc-wVwmGGua-XPJduZg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
   
}));

export default function Maps() {
    const classes = useStyles();
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(67.156776);
    const [lat, setLat] = useState(24.876921);
    const [zoom, setZoom] = useState(13);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });

        map.on('load', function () {
        })
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
        map.on('move', () => {
            setLng(map.getCenter().lng);
            setLat(map.getCenter().lat);
            setZoom(map.getZoom().toFixed(2));
        });
        var el = document.createElement('map');
        el.className = 'marker';
        new mapboxgl.Marker(el)
            .setLngLat([lng, lat]).addTo(map);
        return () => map.remove();
    }, []);
    return (
        <div className={classes.root}>
            <div id="map" style={{ height: '85vh', border: 0, }} ref={mapContainerRef} />
        </div>
    );
}
