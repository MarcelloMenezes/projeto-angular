import {
  ChangeDetectionStrategy,
  Component,
  importProvidersFrom,
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
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

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
    MatGridListModule
  ],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {
  public form: any | FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
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
      console.log(this.form.value);
    }
  }
}
