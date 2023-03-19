export class Products{
    packID! : any;
    packName! : string;
    packDescription! : string;
    packCost! : number;

    constructor(packID : any, packName : string, packDesc : string, packCost : number) { 
      this.packID = packID;
      this.packName = packName;
      this.packDescription = packDesc;
      this.packCost = packCost;
    }
  }
  