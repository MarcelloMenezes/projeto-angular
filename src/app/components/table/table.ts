import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'date', 'name', 'objetivo', 'eixo'];
}
