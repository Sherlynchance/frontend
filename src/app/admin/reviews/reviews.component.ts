import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/_services/review.service';
import { FormBuilder } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  public reviews: any[];

  constructor(
    private reviewService: ReviewService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    this.reviewService.getAll()
      .subscribe(reviews => {
        this.reviews = reviews;
      })
  }

  deleteReview(id){
    this.reviewService.deleteReview(id)
      .subscribe((review) => {
        console.log("Review deleted, ", review);
      })
  }

}

