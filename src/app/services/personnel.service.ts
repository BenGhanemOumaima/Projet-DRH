import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personnel } from '../models/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private personnelUrl = "http://localhost:8080/personnels/";
  private loginUrl = "http://localhost:8080/personnels/login"
  constructor(private httpClient:HttpClient) { }

  addPersonnel(personnel:Personnel){
    return this.httpClient.post<any>(this.personnelUrl + "add", personnel);
  }
  getAllPersonnels(){
    return this.httpClient.get<any>(this.personnelUrl + "all");
  }
  deletePersonnel(id:Number){
    return this.httpClient.delete<any>(this.personnelUrl +"delete/" + id);
  }
  getPersonnelByID(id:Number){
    return this.httpClient.get<any>(this.personnelUrl +"one/" + id);
  }
  updatePersonnel(personnel:Personnel){
    return this.httpClient.patch<any>(this.personnelUrl + "update", personnel);
  }

  //login

  loginAdmin(personnel:Personnel) {
    return this.httpClient.post<any>(this.loginUrl, personnel);
  }

  isLoggedIn(){
    let token = localStorage.getItem("myToken");

    if(token){
      return true;
    }else{
      return false;
    }
  }
}
