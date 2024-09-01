import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AddTicketDialogComponent } from '../add-ticket-dialog/add-ticket-dialog.component';
import { FormsModule } from '@angular/forms';


class Ticket {
  id!: number;
  subject!: string;
  description!: string;
  status!: string;
  constructor() {
    this.id = 0;
    this. subject = '';
    this.description = '';
    this.status = 'Open';
  }
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [FormsModule,MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, RouterOutlet,  ReactiveFormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  tickets: Ticket[] = [];
  //  { id: 1, subject: 'Issue with login', description: 'Cannot login to the system', status: 'Open' },
  //  { id: 2, subject: 'Bug in report generation', description: 'Reports are not generating correctly', status: 'In Progress' }
  //];
  displayedColumns: string[] = ['id', 'subject', 'status'];
  isDialogVisible: boolean = false;
  dialogHeader: string = 'New Ticket';
  newTicket: Ticket=new Ticket();// = { id: 0, subject: '', description: '', status: 'Open' };
  statusOptions: string[] = ['Open', 'In Progress', 'Closed'];
  dialog = inject(MatDialog);

  constructor(private cdf:ChangeDetectorRef) {

  }
  openNewTicketDialog() {
    const dialogRef = this.dialog.open(AddTicketDialogComponent)
    /*this.isDialogVisible = true;*/
  }

  addTicket() {
    console.log("hello")
    this.newTicket.id = this.tickets.length + 1;
    console.log(this.newTicket)
    this.tickets.push(this.newTicket);
    this.clearForm();
   // this.newTicket = new Ticket()
    console.log(this.tickets)
    //this.isDialogVisible = false;
  }


  clearForm() {
    this.newTicket = new Ticket();
  }
}
