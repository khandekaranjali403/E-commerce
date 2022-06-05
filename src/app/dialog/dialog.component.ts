import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand New","Second Hand" ,"Refurbished"]
  productForm !: FormGroup;



  ngOnInit(): void {
  }

}
