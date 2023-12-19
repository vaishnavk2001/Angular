import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nw_name = 'IT MASTER';
  public str = ''
  title = 'new_project';
  obj = {
    title1 : 'angular',
    title2 : 'node',
    title3 : 'frontend framework'
  }
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
}
