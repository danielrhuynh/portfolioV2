import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proj-redirect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proj-redirect.component.html',
  styleUrl: './proj-redirect.component.scss'
})
export class ProjRedirectComponent {
  @Input() body!: string;
  @Input() link!: string;
}
