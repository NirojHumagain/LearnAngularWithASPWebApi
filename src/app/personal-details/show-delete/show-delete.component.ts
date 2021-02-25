import { Component, OnInit } from '@angular/core';
import {SharedService} from "src/app/shared.service";

@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.scss']
})
export class ShowDeleteComponent implements OnInit {

  constructor(private service: SharedService) { }

  personDetailList:any=[];
  ngOnInit(): void {
    this.refreshperList();
  }
  refreshperList(){
    this.service.getAllData().subscribe(data=>{
      this.personDetailList=data;
    })
  }

}
