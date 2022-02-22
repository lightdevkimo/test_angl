
import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( private http:HttpClient){}
  onSubmit(data:any)
  {

  this.http.post('http://127.0.0.1:8000/api/products',data,{ headers: new HttpHeaders().append('Authorization','Bearer 2|B49pDunIMInHwg86zX8xqFnPIu41Q6QvX8Nz1xzL')})
    .subscribe((result)=>{
      console.warn("result",result)
    })
  console.warn(data);
  }
  /*
  constructor ( private http:HttpClient){}
  onSubmit(data:any)
  {

  this.http.post('http://localhost:8000/api/register ',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
console.warn(data);
  }
  */
}
