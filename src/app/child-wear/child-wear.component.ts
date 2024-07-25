import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-child-wear',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-wear.component.html',
  styleUrl: './child-wear.component.scss'
})
export class ChildWearComponent {
  products = [
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/child-wear/1.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/child-wear/2.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/3.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/4.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/5.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/6.jpg'
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      image: 'assets/child-wear/7.jpg'
    },
    {
      name: 'Jeans',
      description: 'Stylish blue jeans',
      image: 'assets/child-wear/8.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/9.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/10.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/11.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/12.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/13.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/14.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/15.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/16.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/17.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/18.jpg'
    },
    {
      name: 'Jacket',
      description: 'Warm winter jacket',
      image: 'assets/child-wear/19.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/20.jpg'
    },
    {
      name: 'Shirt',
      description: 'Casual shirt',
      image: 'assets/child-wear/11 (1).jpg'
    }
  ];


  // selectedProduct = this.products[0];
  selectedProduct = { image: `${this.products[0].image}`, name: `${this.products[0].name}` };


  // selectProduct(product:any): void {
  //   this.selectedProduct = product;
  // }

  
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
