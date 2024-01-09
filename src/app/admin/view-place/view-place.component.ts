import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit{
        placeList:any[]=[]
          
        constructor(private adminService:AdminService){

        }

        ngOnInit(): void {
          this.adminService.getPlace().subscribe(data => {
             console.log("data ",data)
             this.placeList=data
          })
        }
        
} 
