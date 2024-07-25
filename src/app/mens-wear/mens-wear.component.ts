import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mens-wear',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mens-wear.component.html',
  styleUrl: './mens-wear.component.scss'
})
export class MensWearComponent {


  products = [
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/blue.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/gray.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/hood.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/trs.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/stripe.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/white.jpg'
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/polo.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/fullhand.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/dark.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/vneck.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/black.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/last.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/dark.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/vneck.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/black.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/last.jpg'
    }
  ];


  // selectedProduct = this.products[0];

  // selectProduct(product:any): void {
  //   this.selectedProduct = product;
  // }

  selectedProduct = { image: `${this.products[0].image}`, name: `${this.products[0].name}` };
  // products = [
  //   { image: 'product1.jpg', name: 'Product 1' },
  //   { image: 'product2.jpg', name: 'Product 2' },
  //   // Add more products as needed
  // ];

  @HostListener('window:resize')
  onResize() {
    this.adjustModalDisplay();
  }

  ngOnInit() {
    this.adjustModalDisplay();
    this.closeModal();
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.openModal();
  }

  openModal() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption');

    if (modal && modalImg && captionText && window.innerWidth < 768) {
      modal.style.display = 'block';
      modalImg.src = this.selectedProduct.image;
      captionText.innerHTML = this.selectedProduct.name;
    }
  }

  closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  private adjustModalDisplay() {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = window.innerWidth < 768 ? 'block' : 'none';
    }
  }
}
