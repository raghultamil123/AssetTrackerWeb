import { Coordinate } from "./Coordinate.model";

export class AssetGeofence{
    constructor(public assetId:string,public coordinates:Coordinate[]){
        
    }
}