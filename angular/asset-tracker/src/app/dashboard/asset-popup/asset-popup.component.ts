import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from 'src/app/shared/model/Asset.model';

@Component({
  templateUrl: './asset-popup.component.html',
  styleUrls: ['./asset-popup.component.scss']
})
export class AssetPopupComponent implements OnInit {

  public asset:Asset
  constructor(private route:Router) { }

  ngOnInit(): void {

    console.log("loaded");
  }

  clicked(assetId:string){
    console.log(assetId);
    this.route.navigate(['dashboard'],{queryParams:{value:'timeline','assetId':assetId}})

  }

}
