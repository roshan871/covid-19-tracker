import React from 'react'
import './Map.css';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import { showDataOnMap } from './util';


export default function Map({countries, casesType, center, zoom}) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                {/* Loop through the countries and draw circle on the screen */}
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    )
}
