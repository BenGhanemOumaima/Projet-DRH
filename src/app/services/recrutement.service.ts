import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recrutement } from '../models/recrutement';

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {
  private recrutementUrl = "http://localhost:8080/recrutements/";
  constructor(private httpClient:HttpClient) { }

  addRecrutement(recrutement:Recrutement){
    return this.httpClient.post<any>(this.recrutementUrl + "add", recrutement);
  }

  getAllRecrutements(){
    return this.httpClient.get<any>(this.recrutementUrl + "all");
  }

  deleteRecrute(id:Number){
    return this.httpClient.delete<any>(this.recrutementUrl +"delete/" + id);
  }

}
