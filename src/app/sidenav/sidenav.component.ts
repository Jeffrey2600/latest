import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatCardModule,MatButtonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  items = [
    { name: 'Item 1', category: 'category1' },
    { name: 'Item 2', category: 'category2' },
    { name: 'Item 3', category: 'category3' },
    { name: 'Item 4', category: 'category4' },
    { name: 'Item 5', category: 'category5' },
    // Add more items as needed
  ];

  filteredItems = this.items; // Initialize with all items

  filterCategory(category: string) {
    this.filteredItems = this.items.filter(item => item.category === category);
  }

}
