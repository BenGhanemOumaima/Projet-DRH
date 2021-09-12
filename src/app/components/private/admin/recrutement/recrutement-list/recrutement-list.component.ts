import { Component, OnInit } from '@angular/core';
import { RecrutementService } from 'src/app/services/recrutement.service';

@Component({
  selector: 'app-recrutement-list',
  templateUrl: './recrutement-list.component.html',
  styleUrls: ['./recrutement-list.component.css']
})
export class RecrutementListComponent implements OnInit {
  recrutementsList:any[] =[];
  constructor(private recrutementService:RecrutementService) { }

  ngOnInit(): void {
    this.recrutementService.getAllRecrutements().subscribe(
      result =>{
        this.recrutementsList = result;
      }
      ,
      error =>{
        console.log(error);
      }
    )
  }

  deleteRecrute(recrutement:any) {
    let index = this.recrutementsList.indexOf(recrutement);
    this.recrutementsList.splice(index, 1);   

    this.recrutementService.deleteRecrute(recrutement.id).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}
