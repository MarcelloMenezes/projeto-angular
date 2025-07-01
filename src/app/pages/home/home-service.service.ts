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

  enviarDados(dados: Conteudo): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  atualizarConteudo(id: number, dados: any) {
    return this.http.put(`${this.apiUrl}/${id}`, dados);
  }

  deletarConteudo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
