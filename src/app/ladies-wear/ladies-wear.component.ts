import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ladies-wear',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ladies-wear.component.html',
  styleUrl: './ladies-wear.component.scss'
})
export class LadiesWearComponent {
  products = [
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/ladies-wear/1.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/ladies-wear/2.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/ladies-wear/3.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/ladies-wear/4.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/ladies-wear/5.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/ladies-wear/6.jpg'
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/ladies-wear/7.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/ladies-wear/8.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/ladies-wear/9.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/ladies-wear/10.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/ladies-wear/11.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/ladies-wear/12.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/ladies-wear/13.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/ladies-wear/14.jpg'
    }
  ];


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
