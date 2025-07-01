import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Conteudo } from '../../pages/home/interface/home.interface';
import { Modal } from '../modal/modal';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../../pages/home/home-service.service';

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule, MatTooltipModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() dataSource!: MatTableDataSource<any>;
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = [
    'id',
    'date',
    'name',
    'objetivo',
    'eixo',
    'acoes',
  ];

  constructor(private service: HomeService) {}

  atualizarTabela() {
    this.service.getConteudos().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  editar(element: Conteudo) {
    let dialogRef = this.dialog.open(Modal, {
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'save') {
        this.atualizarTabela();
      }
    });
  }

  deletar(id: number) {
    if(window.confirm("Deseja realmente apagar registro?")) {
      this.service.deletarConteudo(id).subscribe({
        next: (res) => {
          alert(res.message);
          this.atualizarTabela()
        },
        error: err => {
          console.error('Erro ao deletar o usuário:', err);
        }
      });
    }
  }
}
