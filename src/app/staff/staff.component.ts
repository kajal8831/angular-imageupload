import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StaffCountComponent } from '../staff-count/staff-count.component';
import { IStaff } from '../istaff';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports:[
    CommonModule,
    StaffCountComponent,
    FormsModule
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})

export class StaffComponent {
 staff : any[];
 txtCity : string = "";
  //to use interface
  staffs : IStaff[] = [
    {id : 1, name : "Ram", city: "Mumbai", gender : "Male"},
    {id : 2, name : "Sham", city: "Pune", gender : "Male"},
    {id : 3, name : "Sita", city: "Mumbai", gender : "Female"},
    {id : 4, name : "Krishna", city: "Pune", gender : "Male"},
    {id : 5, name : "Radha", city: "Mumbai", gender : "Female"},
  ]
 constructor(){
  this.staff = this.staffs;
 }

 GetStaffCount() : number{
  return this.staff.length;
 }

 GetMaleStaffCount() : number {
  return this.staff.filter(e => e.gender === "Male").length;
 }

 GetFemaleStaffCount(){
  return this.staff.filter(e => e.gender === "Female").length;
 }

 SearchByCity() {
  const array = this.staff.filter(e => e.city === this.txtCity);
  this.staff = array;
  console.log(array);
  this.txtCity = "";
 }

 ClearFilter(){
  this.staff = this.staffs;
 }

 FilterGenderWise(gender : string){
  if(gender === "All"){
    this.staff = this.staffs;
  }
  else{
    this.staff = this.staffs;
    const array = this.staff.filter(e => e.gender === gender);
    this.staff = array;
  }
 }
}
