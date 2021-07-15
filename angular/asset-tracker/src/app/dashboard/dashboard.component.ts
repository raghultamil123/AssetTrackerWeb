import { Component, OnInit } from '@angular/core';
import { MapService } from '../service/map.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Asset } from '../shared/model/Asset.model';
import { ReferenceService } from '../service/reference.service';
import { Reference } from '../shared/model/Reference.model';
import { LocationService } from '../service/location.service';
import { AssetLocation } from '../shared/model/AssetLocation.model';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  value =  ''
  assetTypes:Reference[] = []
  isSearchEnabled=true



  assetsLocation:AssetLocation[] = []

  assetLocations?:AssetLocation  = undefined
    
  map: mapboxgl.Map;
  style = 'mapbox://styles/raghultamil/cklxfcv8r3og617rydetr5ggp'

  private userIdSubject = new Subject<string>();

  readonly res = this.userIdSubject
  .subscribe((assetName)=>{
    debounceTime(250)
    distinctUntilChanged()
    
    this.getAssetCurrentLocation(assetName,0,10)
  } )

  constructor(private mapService:MapService,private referenceService:ReferenceService
    ,private locationService:LocationService,private route:ActivatedRoute) {
    
   }

   getAssetSearch(assetName:string){
    this.mapService.removeAllMarkers()
     this.userIdSubject.next(assetName)
   }

  ngOnInit(): void {
   this.route.queryParamMap.subscribe(params=>{
     this.mapService.removeAllMarkers()
    const val = params.get('value')
    if(val === 'timeline'){
       this.isSearchEnabled = false;
       const assetId = params.get('assetId')
       if(assetId!=null){
        this.getAssetTimeline(assetId)
       }
    }else{
      console.log('main');
      this.isSearchEnabled = true;

    }
    if(this.isSearchEnabled){
      this.getAssetTypes()
      this.getAssetCurrentLocation("",0,10);
     }
   });

   this.mapService.buildMap()
   
   
  }


  getAssetTypes(){
    this.referenceService.getReferenceValue("assetType")
    .subscribe(
      (res)=>{
        this.assetTypes = res
      }
    )
  }
  

  getAssetsGeofence(assetIds:string[]){
    this.locationService.getAssetGeofence(assetIds)
    .subscribe((res)=>{
         let count = 1;
      res.forEach((valItem)=>{
        let numbers:number[][] = []
        let assetGeofence = valItem
        assetGeofence.coordinates.forEach( (value)=>{

          numbers.push([value.lon,value.lat])
  } )

  this.mapService.drawPolygon(numbers,count.toString())
       count++;
      })

     
      
    })

    
  }


  getAssetCurrentLocation(assetName:string,from:number,size:number){
    this.locationService.getAssetsCurrentLocation(assetName,from,size)
    .subscribe(
      (res)=>{
        this.assetsLocation = res
        let assetIds:string[]=[]
        this.assetsLocation.forEach((value)=>{
          let asset = new Asset(value.id,value.assetName,value.assetType)
          assetIds.push(asset.id)
          this.mapService.addMarker(value.locations[0].lat,value.locations[0].lon,asset,false)
        })

        this.getAssetsGeofence(assetIds)


      }
    )
  }


  getAssetTimeline(assetId:string){
        this.locationService.getAssetTimeline(assetId)
        .subscribe( 
          (res)=>{
            this.assetLocations = res
            this.assetLocations.locations.forEach ( (location)=>{
                this.mapService.addMarker(location.lat,location.lon,new Asset("","",""),true)
            } )
          }
        )
  }

  
}
  



  
