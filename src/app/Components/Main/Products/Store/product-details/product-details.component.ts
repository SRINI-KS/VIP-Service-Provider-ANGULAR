import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  private productId!:number;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
      this.productId=this.route.snapshot.params["id"]
  }

}
