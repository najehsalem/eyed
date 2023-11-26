import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apareil',
  templateUrl: './apareil.component.html',
  styleUrls: ['./apareil.component.css']
})
export class ApareilComponent {
  @ Input()
name:string =''

@ Input()
status:string=''//etient
getstatus(){
  return this.status;
}
}


