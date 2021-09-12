import { Component, OnInit } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  personnelsList:any[] =[];
  allPersonnels:any[]=[];
  nom: String= "";
  constructor(private personnelService:PersonnelService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.personnelService.getAllPersonnels().subscribe(
      result =>{
        this.personnelsList = result;
        this.allPersonnels = result;
      }
      ,
      error =>{
        console.log(error);
      }
    )
  }

  deletePersonnel(personnel:any) {
    let index = this.personnelsList.indexOf(personnel);
    this.personnelsList.splice(index, 1);   

    this.personnelService.deletePersonnel(personnel.id).subscribe(
      res=>{
        console.log(res);
        this.toastr.error('Employé(e) suprimé(e) avec succès');

      },
      err=>{
        console.log(err);
      }
    )
  }

  filterByName(nom:String){
    this.personnelsList = this.allPersonnels.filter( (c)=>c.nom?.includes(nom) );
  }
}
