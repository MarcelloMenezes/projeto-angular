import {
  ChangeDetectionStrategy,
  Component,
  importProvidersFrom,
  inject,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
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
  readonly dialogRef = inject(MatDialogRef<Modal>);

  constructor(private service: HomeService) {}

  ngOnInit(): void {
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

  salvar() {
    if (this.form.valid) {
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
