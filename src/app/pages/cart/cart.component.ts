import { Component, OnInit, Inject } from '@angular/core';
import { CartService } from '../../services/cart.service'; // Import CartService
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = []; // Array to store cart items

  constructor(@Inject(CartService) private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems(); // Retrieve items from cart service
  }
  redirectToGoogleForm() {
    window.open('https://forms.gle/9Rspid2uiVJtXNrn8', '_blank'); // Opens the form in a new tab
  }
  

}
