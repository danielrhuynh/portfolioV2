import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.scss'
})
export class ExpComponent {
  constructor(public dialogRef: MatDialogRef<ExpComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
