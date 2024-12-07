import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  addToCartItem :number =0;
  product = {
    name: "Iphone",
    price: 789,
    color: "black",
    discount: 8.5,
    inStock: 10,
    pImage: "/assets/images/iphone.png"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount/100);
  }

  onNameChange(event:any) {

  }

  increment(){
    if(this.product.inStock > this.addToCartItem) {
      this.addToCartItem++;
    }
  }
    

  decrement(){
    if(this.addToCartItem > 0) {
      this.addToCartItem--;
    }
  }

  searchTextC :string = '';



  @ViewChild("productListComponent") productListComponentEl : ProductListComponent;

  onSearchText(value: string){
    this.searchTextC =  value;
  }

}
