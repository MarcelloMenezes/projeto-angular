import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Modal } from '../../components/modal/modal';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../../components/table/table';
import { HomeService } from './home-service.service';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatIconModule, Table, MatTableModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  readonly dialog = inject(MatDialog);
  dataSource = new MatTableDataSource<any>();

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.service.getConteudos().subscribe((data) => {
      this.dataSource.data = data;;
    });
  }

  adicionar() {
    let dialogRef = this.dialog.open(Modal, {
      data: { name: 'Augusto' },
    });
  }
}
