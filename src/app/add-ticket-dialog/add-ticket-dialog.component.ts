import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-ticket-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-ticket-dialog.component.html',
  styleUrl: './add-ticket-dialog.component.scss'
})
export class AddTicketDialogComponent {
  description = new FormControl('');
  status = new FormControl('');

  constructor(public dialogRef: MatDialogRef<AddTicketDialogComponent>) { }

  onAdd(): void {
    if (this.description && this.status) {
      this.dialogRef.close({ id: Math.floor(Math.random() * 1000), description: this.description, status: this.status });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
