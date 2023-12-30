import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(public dialogRef: MatDialogRef<AboutMeComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
