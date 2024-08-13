import { HttpClient } from '@angular/common/http';
import { effect, Injectable, signal } from '@angular/core';

export interface Restaurant{
  name:string,
  img:string,
  categories:string

}

export interface ApiResponse {
  restaurant: Restaurant[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {


  isLoading=signal(false)

  baseUrl="https://optimum-corgi-31.hasura.app/api/rest/restaurant"
  data?:Restaurant[]

  constructor(private http:HttpClient) {
    effect(()=>{
      console.log("loading service : ",this.isLoading() )
    })
   }

   fetchData(){
    this.isLoading.set(true)
     this.http.get<ApiResponse>(this.baseUrl).subscribe({
      next:res=>{
        this.data= res.restaurant
        this.isLoading.set(false)
      }
    })
   }
}
