import { Component } from '@angular/core';
import { IHousingLocation } from '../ihousing-location';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApartmentsService } from '../apartments.service';

@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [
    HousinglocationComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent {
  //This is called dependency injection
  constructor(private apartmentsService : ApartmentsService){

  }
  //You can pass single object you can write as  [housingLocation] = housingLocation for input decorator
  // housingLocation : IHousingLocation = {
  //         id : 1,
  //         name : 'Apartment1',
  //         room : '2BHK',
  //         price : '2Cr',
  //         location : 'Andheri',
  //         imagepath : 'http://localhost:4200/assets/images/Apt1.jpg'
  // }

  //To pass an array you need to write ngFor = "let housingLocation of housingLocationList" as input decorator
  //Note, in the code [housingLocation] = "housingLocation" the housingLocation value now refers to the variable used in the ngFor directive. Before this change, it referred to the property on the HomeComponent class.
  housingLocationList : IHousingLocation[] = [
    {
      id : 1,
      name : 'Apartment1',
      room : '2BHK',
      price : '2Cr',
      location : 'Andheri',
      imagepath : 'http://localhost:4200/assets/images/Apt1.jpg'
    },
    {
      id : 2,
      name : 'Apartment2',
      room : '1BHK',
      price : '1Cr',
      location : 'Malad',
      imagepath : 'http://localhost:4200/assets/images/Apt2.jpg'
    },
    {
      id : 3,
      name : 'Apartment3',
      room : '3BHK',
      price : '3Cr',
      location : 'Thane',
      imagepath : 'http://localhost:4200/assets/images/Apt3.jpg'
    },
    {
      id : 4,
      name : 'Apartment4',
      room : '2BHK',
      price : '75L',
      location : 'Miraroad',
      imagepath : 'http://localhost:4200/assets/images/Apt4.jpg'
    },
    {
      id : 5,
      name : 'Apartment5',
      room : '3BHK',
      price : '3Cr',
      location : 'Andheri',
      imagepath : 'http://localhost:4200/assets/images/Apt5.jpg'
    }
  ]
  
  isPopupVisible : boolean = false;
  contacts : any = {};
  data : any;
  results : any;

  showContact(contactInfo : any) : void {
    console.log("ContactInfo",contactInfo);
    this.contacts = contactInfo;
    console.log("Contacts",this.contacts);
    this.isPopupVisible = true;
  }

  closePopup() : void {
    this.isPopupVisible = false;
  }

  CheckObservable(){
    this.apartmentsService.getDataObservable().subscribe(
      (result : any) => {
         this.data = result;
      },
      (error : any) => {
        console.log(error);
      }
    )
  }

  CheckPromise(){
    this.apartmentsService.getDataPromise().then(
    (result) => {
        this.results = result;
    }
    ).catch((error) => {
      console.log(error);
    })
  }
}
