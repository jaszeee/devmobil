import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://thenicheapp.onrender.com/';  // Remplacez cela par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  // Méthode générique pour effectuer une requête HTTP
  private request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.apiUrl}${endpoint}`;
    const headers = new HttpHeaders();

    // Ajoutez vos en-têtes personnalisés ici si nécessaire
    // headers.append('Authorization', 'Bearer ' + yourToken);

    return this.http.request(method, url, { body, headers });
  }

  // Exemple de méthode pour effectuer un appel GET à l'API
  getSomeData(): Observable<any> {
    return this.request('GET', '/endpoint');
  }

  // Exemple de méthode pour effectuer un appel POST à l'API
  postData(data: any): Observable<any> {
    return this.request('POST', '/endpoint', data);
  }

  // Ajoutez d'autres méthodes pour les appels PUT, DELETE, etc.

}