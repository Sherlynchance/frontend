import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { SearchHotel } from 'src/app/_models/searchhotel';
import { SearchhotelService } from 'src/app/_services/searchhotel.service';
import { Router } from '@angular/router';
import { Hotels } from 'src/app/_models';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  

  public Hotels: any;


  constructor(
    private route: ActivatedRoute,
    private getHotelLocation: SearchhotelService,
    private router: Router) { }

  ngOnInit() {
    
  }

  

  

}
