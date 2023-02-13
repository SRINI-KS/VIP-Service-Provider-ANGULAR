import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  public productId!:number;
  constructor(private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
      this.productId=+this.route.snapshot.params["id"]
      this.route.params.subscribe(
        (params)=>{
          this.productId=+params['id']
        }
      )
  }

  onSelectNext(){
    this.productId+=1;
    this.router.navigate(['productdetails',this.productId])
  }
}
