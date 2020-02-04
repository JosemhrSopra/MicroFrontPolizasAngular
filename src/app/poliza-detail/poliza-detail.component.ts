import { Component, OnInit } from '@angular/core';
import { Poliza } from '../../model/Poliza';
import { Tomador } from '../../model/Tomador';
import { PolizaService } from '../../service/poliza-service.service';
import { TomadorService } from '../../service/tomador-service.service';

@Component({
  selector: 'app-poliza-detail',
  templateUrl: './poliza-detail.component.html',
  styleUrls: ['./poliza-detail.component.css']
})
export class PolizaDetailComponent implements OnInit {

  poliza: Poliza;
 
  constructor(private polizaService: PolizaService) {
  }
 
  ngOnInit() {
    this.polizaService.findOne().subscribe(data => {
      this.poliza = data.poliza;
    });
  }
}
