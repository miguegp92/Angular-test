import { Injectable } from '@angular/core';
import { mySpApi } from '../../app/sp/SpApiService';

@Injectable({
  providedIn: 'root'
})
export class MySpApiService extends mySpApi{

  constructor() {
    super();
  }

  testing(){
    return this.getItemContratos();
  }
}
