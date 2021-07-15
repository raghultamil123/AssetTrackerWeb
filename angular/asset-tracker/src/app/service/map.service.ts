import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { MatSnackBar, matSnackBarAnimations } from '@angular/material/snack-bar';
import * as mapboxgl from 'mapbox-gl';
import { Marker } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { AssetPopupComponent } from '../dashboard/asset-popup/asset-popup.component';
import { Asset } from '../shared/model/Asset.model';
import { DynamicComponentService } from './dynamic-component.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  markers:Marker[] = []
  map: mapboxgl.Map;
  style = 'mapbox://styles/raghultamil/cklxfcv8r3og617rydetr5ggp'
  constructor(private dynamicComponent:DynamicComponentService,private snackbar:MatSnackBar) {

   }


   buildMap(){
    this.map = new mapboxgl.Map({
      accessToken:environment.MAPBOX_TOKEN,
      container: 'map',
      style: this.style,
      zoom: 9,
      center:[80.237617, 13.067439]
  })
}

addMarker(lat:number,lon:number,asset:Asset,assetTimeline:boolean){
  
  let marker = new mapboxgl.Marker()
  .setLngLat(new mapboxgl.LngLat(lon, lat))
  .addTo(this.map)
  if(assetTimeline){

  }else{
    var popupElement = this.dynamicComponent.injectComponent(AssetPopupComponent,x=>x.asset = asset)

 console.log(popupElement);
  var markerPopup = new mapboxgl.Popup(
    {
      closeOnClick:false
    }
  ).setLngLat(new mapboxgl.LngLat(lon,lat))
  .setDOMContent(popupElement)
  marker.setPopup(markerPopup).addTo(this.map)

  }
  this.markers.push(marker)

  
}


drawPolygon(coordinates:any,assetId:string){
  
  const val:string= 'pesuser'+assetId;
  console.log(val);
  this.map.on('load',  () => {
    this.map.addSource(val, {
    'type': 'geojson',
    'data': {
      'properties':{
        'name':assetId
      },
    'type': 'Feature',
    'geometry': {
    'type': 'Polygon',
    'coordinates': [
    coordinates
    ]
    }
    }
    });
    this.map.addLayer({
    'id': val,
    'type': 'fill',
    'source': val, 
    'layout': {},
    'paint': {
    'fill-color': '#008000',
    'fill-opacity': 0.5
    }
    });
    this.map.on('click', val,  (e)=> {
      this.snackbar.open(`Geofence For asset ${e.features?.[0].properties?.name}`);

      });
    
    });
  

    
}

removeAllMarkers(){
  this.markers.forEach( (val)=>{
    val.remove()
  })

  this.markers = []
}



}







