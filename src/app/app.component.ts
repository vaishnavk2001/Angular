import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nw_name = 'IT MASTER';
  public str = ''
  public count1 = 0
  public nw_str = ''
  check(){
    console.log('button clicked...!')
    if(this.count1 % 2 == 0){
      this.nw_str = 'even';
    }else{
      this.nw_str = 'odd';
    }
  }
  title = 'new_project';
  obj = {
    title1 : 'angular',
    title2 : 'node',
    title3 : 'frontend framework'
  }
  public Evenodd = 'even'
  ngOnInit=()=>{
    console.log(this.str)
  }
  colorFunction = () =>{
    return 'yellow'
  }
  heightFunction=()=>{
    return "25px"
  }
  functionCalling(){
    console.log('button clicked..!')
    this.str = 'Good Morning'
  }
  functionCalling2(){
    console.log('second button clicked')
    this.str = 'Good AfterNoon'
  }
  public count = 0
  Addition=()=> {
    console.log('add button clicked')
    this.count = this.count + 1 
    if(this.count % 2 == 0){
      this.Evenodd = 'even'
    }else{
      this.Evenodd = 'odd'
    }
  }
  Substraction = () =>{
    console.log('substraction button clicked ')
    this.count = this.count-1
    if(this.count % 2 == 0){
      this.Evenodd = 'even'
    }else{
      this.Evenodd = 'odd'
    }
  }

}
