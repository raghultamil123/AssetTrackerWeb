import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssetGeofence } from '../shared/model/AssetGeofence.model';
import { AssetLocation } from '../shared/model/AssetLocation.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = environment.APP_BASE_URL + environment.VERSION_ONE + "/gps"
  constructor(private httpClient:HttpClient) { }


  getAssetGeofence(assetIds:string[]):Observable<AssetGeofence[]>{
return this.httpClient.get<AssetGeofence[]>(this.baseUrl+"/assets/geofence",{
  params:{
    "assetIds":assetIds
  }
})
  }

getAssetsCurrentLocation(assetName:string,from:number,size:number):Observable<AssetLocation[]>{
  return this.httpClient.get<AssetLocation[]>(this.baseUrl+'/assets',{
    params:{
      "assetId":assetName,
      "from":from.toString(),
      "size":size.toString()
    }
  })
}

getAssetTimeline(assetId:string):Observable<AssetLocation>{
  return this.httpClient.get<AssetLocation>(this.baseUrl+'/'+assetId+'/timeline')
}


}
