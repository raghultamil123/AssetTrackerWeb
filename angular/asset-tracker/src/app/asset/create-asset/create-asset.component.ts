import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AssetService } from 'src/app/service/asset.service';
import { ReferenceService } from 'src/app/service/reference.service';
import { Reference } from 'src/app/shared/model/Reference.model';

@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: ['./create-asset.component.scss']
})
export class CreateAssetComponent implements OnInit {

  constructor(private referenceService:ReferenceService,private assetService:AssetService,
    public dialogRef: MatDialogRef<CreateAssetComponent>) { }

  assetTypeId:string=""
  assetName:string=""
  assetTypes:Reference[] = []
  ngOnInit(): void {
    this.getAssetTypes()
  }
  
   getAssetTypes(){
     this.referenceService.getReferenceValue("assetType")
     .subscribe( (res)=>{
       this.assetTypes = res
     }  );
   }

   createAsset(){
     this.assetService.createAsset({
       "assetName":this.assetName,
       "assetTypeId":this.assetTypeId
     }).subscribe( (res)=>{
       console.log(res);
       this.dialogRef.close()
     } )
   }
}
