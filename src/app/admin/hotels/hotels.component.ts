import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HotelService } from 'src/app/_services/hotel.service';
import { Hotels } from 'src/app/_models';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  @ViewChild('imageFile') imageFileRef: ElementRef;

  hotelForm: FormGroup;
  loading = false;
  submitted = false;
  
  public Hotels: Hotels[];
  selectedHotel: Hotels = {
    id: null,
    hotel_name: null,
    hotel_address: null,
    hotel_phoneno: null,
    hotel_postal: null,
    hotel_city: null,
    hotel_ratings: null,
    hotel_image: null
  }  

  constructor(
    private HotelService: HotelService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService ) { }

  get f() { return this.hotelForm.controls; }

  ngOnInit() {
    this.HotelService.getAll()
      .subscribe(Hotels => {
        this.Hotels = Hotels;
      })

      this.hotelForm = this.formBuilder.group({
        id: [null],
        hotel_name: [''],
        hotel_address: [''],
        hotel_phoneno: [''],
        hotel_postal: [''],
        hotel_city: [''],
        hotel_ratings: [''],
        hotel_image: ['']
      });
    }

  onAddSubmit(){
    let files = this.imageFileRef.nativeElement.files;

    if (files.length > 0) {
      files = files[0];
    } else {
      files = null;
    }

    this.submitted = true;
    this.loading = true;

    const params = this.hotelForm.getRawValue();

    if (params.id) {
      delete params['hotel_image'];
      this.HotelService.updateHotel(params)
        .pipe(first())
          .subscribe(
            data => {
              alert('Hotel updated');
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/admin/hotels']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    } else {
      this.HotelService.createHotel(params, files)
        .pipe(first())
          .subscribe(
            data => {
                // this.alertService.success('Registration successful', true);
                this.router.navigate(['/admin/hotels']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    
  }

  editHotel(hotel) {
    console.log(hotel);
    this.hotelForm.setValue(hotel);
  }
  
  deleteHotel(id){
    this.HotelService.deleteHotel(id)
      .subscribe((hotel: Hotels) => {
        console.log("Hotel deleted, ", hotel);
      })
  }

  
  
  

}

