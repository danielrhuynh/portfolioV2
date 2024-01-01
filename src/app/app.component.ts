import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatDialog } from '@angular/material/dialog';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './proj/proj.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioV2';
  constructor(public dialog: MatDialog) { }

  openModalAboutMe(): void {
    this.dialog.open(AboutMeComponent, {
      width: '1000px',
    });
  }

  openModalExp(): void {
    this.dialog.open(ExpComponent, {
      width: '1000px',
    });
  }

  openModalProjects(): void {
    this.dialog.open(ProjectsComponent, {
      width: '1500px',
    });
  }
}