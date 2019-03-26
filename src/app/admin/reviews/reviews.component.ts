import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/_services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  public reviews: any[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getAll()
      .subscribe(reviews => {
        this.reviews = reviews;
      })
  }

}

