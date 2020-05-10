import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  
  ContactUs(data){
    return this.http.post('http://127.0.0.1:8000/', data , { responseType: 'json' });
  }
}
