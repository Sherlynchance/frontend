import { Component, OnInit } from '@angular/core';
// import { SearchhotelService } from 'src/app/_services/searchhotel.service';
import { Hotels } from 'src/app/_models';
import { SearchHotel } from 'src/app/_models/searchhotel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  availablehotels: Hotels[] = [];
  searchForm: FormGroup;
  loading = false;
  submitted = false;
  userinputlocation: SearchHotel = {
    id: 0,
    hotel_name: '',
    hotel_address: '',
    hotel_phoneno: 0,
    hotel_postal: 0,
    hotel_city: '',
};


  constructor(
    // private getHotelLocation: SearchhotelService,
    private formBuilder: FormBuilder,
    private router: Router ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchLocation: ['', Validators.required]
    })
  }

  get f() { return this.searchForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.searchForm.invalid){
      return;
    }

    let city = this.f.searchLocation.value;

    this.router.navigate(['/hotel-list'], { queryParams: {hotel_city: city}});
  }


}

