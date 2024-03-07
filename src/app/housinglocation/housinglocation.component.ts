import { Component , EventEmitter, Input, Output} from '@angular/core';
import { IHousingLocation } from '../ihousing-location';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  templateUrl: './housinglocation.component.html',
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {
  contactInfo = {
    dealerName : "Santosh Bajpayee",
    mobileNumber : "9820034567",
    city : "Mumbai"
  };

  @Input() housinglocation! : IHousingLocation;
  @Output() contactEvent = new EventEmitter<any>();

  GetContactInfo() {
    this.contactEvent.emit(this.contactInfo);
  }
}
