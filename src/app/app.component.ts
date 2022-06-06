import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';

export interface UserData {
  productName: string;
  category: string;
  freshness: string;
  price: string;
  comment:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewAngularproject';
  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'comment'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | undefined;

  


  constructor(private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    throw new Error('Method not implemented.');
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',


    });

  }
}

// to get the all records//

// getAllProducts(){

//   this.api.getAllproduct()
//     .subscribe({
//       next: (res: any) => {
//         this.dataSource = new MatTableDataSource(res)
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       },
//       error: (_err: any) => {
//         alert("Error while fetching the records");
//       }
      // applyFilter(event: Event) {
      //   const filterValue = (event.target as HTMLInputElement).value;
      //   this.dataSource.filter = filterValue.trim().toLowerCase();
    
      //   if (this.dataSource.paginator) {
      //     this.dataSource.paginator.firstPage();
      //   }
      // }

//  })
