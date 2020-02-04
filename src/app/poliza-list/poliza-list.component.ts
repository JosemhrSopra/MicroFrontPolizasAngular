import { Component, OnInit } from '@angular/core';
import { Poliza } from '../../model/Poliza';
import { PolizaService } from '../../service/poliza-service.service';

@Component({
  selector: 'app-poliza-list',
  templateUrl: './poliza-list.component.html',
  styleUrls: ['./poliza-list.component.css']
})
export class PolizaListComponent implements OnInit {

  polizas: Poliza[];
 
  constructor(private polizaService: PolizaService) {
  }
 
  ngOnInit() {
    this.polizaService.findAll().subscribe(data => {
      this.polizas = data.listPolizas;
    });
  }
}
