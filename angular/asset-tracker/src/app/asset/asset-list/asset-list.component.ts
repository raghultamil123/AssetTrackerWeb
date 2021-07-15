import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from 'src/app/service/asset.service';
import { Asset } from 'src/app/shared/model/Asset.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  constructor(private assetService:AssetService,private route:Router) { }
   assets:Asset[] = [
   ]
  ngOnInit(): void {
    this.getAssets()
  }

  getAssets(){
    this.assetService.getAssets()
    .subscribe((res)=>{
      this.assets = res
    })
  }

  deleteAsset(assetId:string){
    this.assetService.deleteAsset(assetId).subscribe(
      (res)=>{
        console.log(res);
        this.getAssets()
      }
    )
  }

  viewAssetTimeline(assetId:string){
     this.route.navigate(['dashboard'],{queryParams:{value:'timeline','assetId':assetId}})
  }

  exportAssetData(assetId:string){
    console.log(assetId);
  }
}
