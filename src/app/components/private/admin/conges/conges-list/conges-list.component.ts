import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-conges-list',
  templateUrl: './conges-list.component.html',
  styleUrls: ['./conges-list.component.css']
})
export class CongesListComponent implements OnInit {
 congesList:any[] =[];
  constructor(private congeService:CongeService) { }

  ngOnInit(): void {
    this.congeService.getAllConges().subscribe(
      result =>{
        this.congesList = result;
      }
      ,
      error =>{
        console.log(error);
      }
    )
  }

}
