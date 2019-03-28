import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rooms } from 'src/app/_models/rooms';
import { HotelService } from 'src/app/_services/hotel.service';
import { ReviewService } from 'src/app/_services/review.service';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/_services/alert.service';
import { AuthGuard } from '../../_guards/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  searchForm: FormGroup;
  reviewForm: FormGroup;
  loading = false;
  submitted = false;
  

  public Hotels: any;
  public Rooms: Rooms[];


  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private router: Router,
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.hotelService.getById(res.id).subscribe(result => {
        console.log(result);
        this.Hotels = result;
      })

      this.reviewForm = this.formBuilder.group({
        comment:['', Validators.required],
        rating:['', Validators.required],
        hotel_id: [res.id],
      })
    });
  }

  get f() { return this.reviewForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.reviewForm.invalid) {
      return;
    }

    this.loading = true;
    this.reviewService.createReview(this.reviewForm.value)
      .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Review posted', true);
            window.alert("feifj")
            // this.router.navigate(['/hotel']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
}

  // showHide(){
  //   CanActivate:[AuthGuard]
    
  // }
    
  }

  
