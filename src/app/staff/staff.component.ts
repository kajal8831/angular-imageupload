import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
   staffs : any[];

   constructor(){
    this.staffs = [
      {
        ID : 1,Name : "Tom",Gender: "Male",Age: 32,City: "Mumbai"
      },
      {
        ID : 2,Name : "Harry",Gender: "Male",Age: 42,City: "Hyderabad"
      },
      {
        ID : 3,Name : "Rihana",Gender: "Female",Age: 35,City: "Chennai"
      },
      {
        ID : 4,Name : "Jack",Gender: "Male",Age: 40,City: "Bangalore"
      },
      {
        ID : 5,Name : "Maria",Gender: "Female",Age: 43,City: "Mumbai"
      },
    ];
   }
}
