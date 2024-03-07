import { Component ,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-staff-count',
  standalone: true,
  imports: [],
  templateUrl: './staff-count.component.html',
  styleUrl: './staff-count.component.css'
})
export class StaffCountComponent {
  //Declare variables and decorate with input decorator
  //So this means that the values of these variables will come from parent component
  //you need to import child component in parent component and then add child selector tag
  //Then in square bracket you can mention these variables name and update their value from parent component
 @Input() staffCount = 0;
 @Input() maleStaffCount = 0;
 @Input() femaleStaffCount = 0;
 //Declare event emitter instance and decorate with output decorator
 //you need to emit this event emitter inside the function where you want to trigger an action which will update something in parent
 //In parent component you have to mention this emitter in rounded brackets 
 //After this assign the value of this (emitter) = function where you want to pass the value in parent or perform any action  
 @Output() someEvent = new EventEmitter<string>();

 PassSelectedValue(str : string){
  this.someEvent.emit(str);
}

}


