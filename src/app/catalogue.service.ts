import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getResource(url: string) { // Ajout du type pour 'url'
    return this.http.get<any>(this.host + url); // Définir le type de réponse attendue ('any' pour l'exemple)
  }
}
