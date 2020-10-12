import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {

  private dataURL = 'https://cs251-outlab-6.herokuapp.com/initial_values/';

  constructor(private http: HttpClient) { }

  getData(): Observable<Contact> {
    return this.http.get<Contact>(this.dataURL);
  }
}
