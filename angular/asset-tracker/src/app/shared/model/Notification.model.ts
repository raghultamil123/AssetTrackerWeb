import { Asset } from "./Asset.model";

export class Notification{
    constructor(public message:String,public assetId:String,public asset?:Asset){

    }
}