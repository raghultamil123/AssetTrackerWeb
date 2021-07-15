import { Coordinate } from "./Coordinate.model";

export class AssetLocation{
    constructor(public id:string,public assetName:string,public assetType:string,public locations:Coordinate[]){

    }
}