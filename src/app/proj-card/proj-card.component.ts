import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proj-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proj-card.component.html',
  styleUrl: './proj-card.component.scss'
})
export class ProjCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() roles!: string[];
  @Input() imageUrl!: string;
}
