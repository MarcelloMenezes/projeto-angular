import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeService } from '../../pages/home/home-service.service';

@Component({
  selector: 'app-modal',
  providers: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {
  public form: any | FormGroup;
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<Modal>);
  title: string = 'Adicionar';

  constructor(private service: HomeService) {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      data: new FormControl('', [Validators.required]),
      objetivo: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      eixo: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.title = 'Editar';
      this.form.setValue({
        nome: this.data.nome_professor,
        objetivo: this.data.objetivo,
        data: this.data.data_aula,
        eixo: this.data.eixo,
      });
    }
  }

  salvar() {
    if (this.form.valid) {
      if (this.data) {
        this.service
          .atualizarConteudo(this.data.id, this.form.value)
          .subscribe({
            next: (res: any) => {
              alert(res.message);
              this.dialogRef.close('save');
            },
            error: (erro) => {
              alert('Erro ao enviar' + erro);
            },
          });
      } else {
        this.service.enviarDados(this.form.value).subscribe({
          next: (res) => {
            alert(res.message);
            this.dialogRef.close('save');
          },
          error: (erro) => {
            alert('Erro ao enviar' + erro);
          },
        });
      }
    }
  }
}
