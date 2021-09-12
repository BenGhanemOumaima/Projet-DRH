import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from '../models/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private congeUrl = "http://localhost:8080/conges/";
  constructor(private httpClient:HttpClient) { }

  addConge(conge:Conge){
    return this.httpClient.post<any>(this.congeUrl + "add", conge);
  }
  getAllConges(){
    return this.httpClient.get<any>(this.congeUrl + "all");
  }

}
