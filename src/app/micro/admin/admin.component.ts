import { Component, OnInit } from '@angular/core';
import { MySpApiService } from '../../core/my-sp-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mensaje: any;
  //constructor() { }
  constructor(private spService: MySpApiService) { }

  ngOnInit() {
    //this.spService.proxyLocal;
    this.getMessagesFromService();
  }

  getMessagesFromService(){
    const mostrar = new MySpApiService;
    this.mensaje = mostrar.testing();
  }
}
