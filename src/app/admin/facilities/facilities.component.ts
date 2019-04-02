// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-facilities',
//   templateUrl: './facilities.component.html',
//   styleUrls: ['./facilities.component.css']
// })
// export class FacilitiesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FacilityService } from 'src/app/_services/facility.service';
import { Facility } from 'src/app/_models/facility';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {



  facilityForm: FormGroup;
  loading = false;
  submitted = false;

  public Facility: Facility[];
  selectedFacility: Facility = {
    id: null,
    facility_name: null,
    hotel_id: null,
  };

  constructor(
    private facilityService: FacilityService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
  }

  get f() { return this.facilityForm.controls; }

  getFacilities() {
    this.facilityService.getAll()
      .subscribe(Facility => {
        this.Facility = Facility;
      });
  }

  ngOnInit() {
    this.getFacilities();

    this.facilityForm = this.formBuilder.group({
      id: [null],
      facility_name: [''],
      hotel_id: ['']
    });
  }

  onAddSubmit() {

    this.submitted = true;
    this.loading = true;

   
    const params = this.facilityForm.getRawValue();

    if (params.id) {
      this.facilityService.updateFacility(params)
        .subscribe(
          data => {
            alert('Facility updated');
            // this.router.navigate(['/admin/facility']);
            this.getFacilities();
            this.facilityForm.reset();
            this.loading = false;
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
 
    else {
      this.facilityService.createFacility(params)
        .pipe(first())
        .subscribe(
          data => {
            window.alert('Facility Added')
         
            this.router.navigate(['/admin/facility']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
  }
  
  editFacility(facility) {
    console.log(facility);
    this.facilityForm.setValue({
      id: facility.id,
      facility_name: facility.facility_name,
      hotel_id: facility.hotel_id
    });
  }
  
  deleteFacility(id){
    this.facilityService.deleteFacility(id)
      .subscribe((facility: Facility) => {
        console.log('Facility deleted, ', facility);
      });
  }
}

