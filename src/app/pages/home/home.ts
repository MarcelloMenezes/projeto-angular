import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Modal } from '../../components/modal/modal';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, Table],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly dialog = inject(MatDialog);

  adicionar() {
    let dialogRef = this.dialog.open(Modal, {
      data: { name: 'Augusto' },
    });
  }
}
