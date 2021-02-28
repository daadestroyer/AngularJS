import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Counter App";
  footer:string = "Design and developed by Shubham Nigam aka"
  footername:string = "daadestroyer"

  count:number = 0
 
  // To increase count value
  increaseHandler = ()=>{
    if(this.count == 10){
      this.count+=15;
    }
    this.count += 1;
  }

  // To decrease count value
  decreaseHandler = ()=>{
    if(this.count<=0){
      alert('cant be less than 0')
      return
    }
    else{
      this.count -= 1;
    }
    
  }

  // To rest count value
  resetHandler = ()=>{
    this.count = 0;
  }

}
