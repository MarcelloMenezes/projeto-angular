import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  date: string;
  id: number;
  objetivo: string;
  eixo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '1.0079',
    eixo: 'H',
  },
  {
    id: 2,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '4.0026',
    eixo: 'He',
  },
  {
    id: 3,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '6.941',
    eixo: 'Li',
  },
  {
    id: 4,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '9.0122',
    eixo: 'Be',
  },
  {
    id: 5,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '10.811',
    eixo: 'B',
  },
  {
    id: 6,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '12.0107',
    eixo: 'C',
  },
  {
    id: 7,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '14.0067',
    eixo: 'N',
  },
  {
    id: 8,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '15.9994',
    eixo: 'O',
  },
  {
    id: 9,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo: '18.9984',
    eixo: 'F',
  },
  {
    id: 10,
    date: '18/09/25',
    name: 'Quezia Regina',
    objetivo:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam facere libero rem, ipsam suscipit. Iure quisquam voluptatibus, sunt, non adipisci saepe dolorum dicta debitis voluptates nostrum aliquam maiores tempore. Sint reprehenderit dolorum in ipsa iusto perspiciatis, exercitationem praesentium quaerat recusandae magni inventore a nemo atque error distinctio, quidem consequatur quasi temporibus officia, sunt labore? Eaque debitis deserunt aut repudiandae.',
    eixo: 'Ne',
  },
];

@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  displayedColumns: string[] = ['id', 'date', 'name', 'objetivo', 'eixo'];
  dataSource = ELEMENT_DATA;
}
