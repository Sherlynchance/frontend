import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/_models/hotels';
import { SearchhotelService } from '../../_services/searchhotel.service'; 
import { HotelService } from '../../_services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public Hotels: Hotels[];
  isImageLoading: boolean;
  imageService: any;

  constructor(
    private HotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
    private searchhotelService: SearchhotelService) { }

  ngOnInit() {
    this.HotelService.getAll()
      .subscribe(Hotels => {
        this.Hotels = Hotels;
      })

    this.route.queryParams.subscribe(params => {
      const body: any = {
        hotel_city: params.hotel_city
      }
      this.searchhotelService.getAvailable(body)
        .subscribe(
          data => {
            this.Hotels = data;
          }
        );
    });
  }
}

