import { HttpClient } from '@angular/common/http';
import { Component, effect, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DataService, Restaurant } from '../../service/data.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  data?:Restaurant[]
  isLoading=false

  constructor(private dataService: DataService) {
    effect(()=>{
      this.isLoading=dataService.isLoading()
      console.log("in components : ", dataService.isLoading(),this.isLoading)
    })
  }
  
  ngOnInit(): void {
   this.dataService.fetchData()
   this.data=this.dataService.data
  }

  
}
