import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private url = 'http://localhost:3000/cadastros/';

  constructor(private http: HttpClient) {}

  cadastrar(formData: any): Observable<any> {
    return this.http.post(this.url, formData);
  }

  getCadastros(): Observable<any> {
    return this.http.get(this.url);
  }

  getCadastroById(id: number): Observable<any> {
    return this.http.get(this.url + id).pipe(
      map((cadastro: any) => {
        return cadastro;
      })
    );
  }

  atualizarCadastro(id: number, dadosAtualizados: any): Observable<any> {
    return this.http.put(this.url + id, dadosAtualizados);
  }  

  delete(id: any): Observable<any> {
    console.log(id);
    return this.http.delete(this.url + id);
  }

}
