import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Asset } from '../shared/model/Asset.model';


@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private baseUrl = environment.APP_BASE_URL + environment.VERSION_ONE
  constructor(private httpClient:HttpClient) { }


  public getAssets():Observable<Asset[]>{
        return this.httpClient.get<Asset[]>(this.baseUrl + '/assets')
  }

  public createAsset(asset:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/assets/register",asset);
  }

  public deleteAsset(assetId:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/assets/delete/"+assetId);
  }

}
