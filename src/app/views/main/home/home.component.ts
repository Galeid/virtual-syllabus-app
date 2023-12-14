import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DividerComponent } from '../../../components/divider/divider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  carouselIndex: number[] = [0, 1];
}
