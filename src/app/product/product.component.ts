import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
     
styles:[
  `
  h2{
    color: red;
}
  `
]
 // styleUrls: ['./product.component.css']
})
export class ProductComponent { 

  

  productCost:number=30;

  products:Product[]=[

    {
      productId:123,
      productName:'Mac',
      productCost:70000
      
    },

    {
      productId:234,
      productName:'IPhone',
      productCost: 60000
    },


    {
      productId:567,
      productName:'IPad',
      productCost: 6000
    }
  

  ];













  // private product:any={
  //   productId:123,
  //   productName:'Mac',
  //   productCost: 60000
  // }


  // getProduct():any{
  //   return this.product;
  // }

  

  
}
