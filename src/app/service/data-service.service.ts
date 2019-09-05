import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }


  getUsuarios(){
    return this.http.get('https://swapi.co/api/people');
  }

}
