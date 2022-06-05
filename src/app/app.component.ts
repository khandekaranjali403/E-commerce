import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewAngularproject';
  api: any;

  constructor(private dialog : MatDialog){

  }
  ngOnInit(): void {
  this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent,{
      height: '400px',
      width: '600px',
      

    });
    
  }

  //to get the all records//

  getAllProducts(){

    this.api.getproduct()
    .subscribe({
      next:(res: any)=>{
        console.log(res);
      },
      error:(_err: any)=>{
        alert("Error while fetching the records");
      }
      
    })
  }

  
  }

