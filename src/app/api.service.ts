import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://thenicheapp.onrender.com/';  // Remplacez cela par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  // Exemple de méthode pour effectuer un appel GET à l'API
  getSomeData(): Observable<any> {
    const url = `${this.apiUrl}/endpoint`;
    return this.http.get(url);
  }

  // Ajoutez d'autres méthodes pour les appels POST, PUT, DELETE, etc.
}
