import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAssetComponent } from './create-asset/create-asset.component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }


  openDialog():void{
    const createAssetDialog = this.dialog.open(CreateAssetComponent,{
      height: 'auto',
      width: '400px',
    })
  }

}
