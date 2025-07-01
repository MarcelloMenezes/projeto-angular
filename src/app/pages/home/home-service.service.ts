import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conteudo } from './interface/home.interface';



@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/api/conteudos';

  constructor(private http: HttpClient) {}

  getConteudos(): Observable<Conteudo[]> {
    return this.http.get<Conteudo[]>(this.apiUrl);
  }
}
