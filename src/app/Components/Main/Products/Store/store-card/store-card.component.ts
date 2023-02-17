import { Component, Input, OnInit } from '@angular/core';
import { PropertyData } from 'src/app/Models/Main/Property/property-data';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit{

  @Input() prop!: PropertyData;
  ngOnInit(){
  }

}
