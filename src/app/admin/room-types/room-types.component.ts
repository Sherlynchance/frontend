// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-room-types',
//   templateUrl: './room-types.component.html',
//   styleUrls: ['./room-types.component.css']
// })
// export class RoomTypesComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RoomTypeService } from 'src/app/_services/roomtype.service';
import { RoomTypes} from 'src/app/_models/roomtype';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent implements OnInit {

  roomtypeForm: FormGroup;
  loading = false;
  submitted = false;

  public RoomTypes: RoomTypes[];
  selectedRoomTypes: RoomTypes = {
    id: null,
    room_name: null,
    room_price: null,
  };

  constructor(
    private roomtypeService: RoomTypeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.roomtypeService.getAll()
      .subscribe(RoomType => {
        this.RoomTypes = RoomType;
      });

    this.roomtypeForm = this.formBuilder.group({
      id: [null],
      room_name: [''],
      room_price: ['']
    });
  }

  get f() { return this.roomtypeForm.controls; }

  editRoomType(RoomType) {
    console.log(RoomType);
    this.roomtypeForm.setValue({
      id: RoomType.id,
      room_name: RoomType.room_name,
      room_price: RoomType.room_price
    });
  }
  
  deleteRoomType(id){
    this.roomtypeService.deleteRoomType(id)
      .subscribe((roomtype: RoomTypes) => {
        window.alert("Room Type deleted");
        console.log('Room type deleted, ', roomtype);
    });
  }

  getRoomType(){
    this.roomtypeService.getAll()
      .subscribe(RoomTypes => {
        this.RoomTypes = RoomTypes;
      });
  }

  onAddSubmit(){
  

    this.submitted = true;
    this.loading = true;

    
    const params = this.roomtypeForm.getRawValue();

  
    if (params.id) {
     
      this.roomtypeService.updateRoomType(params)
        .pipe(first())
          .subscribe(
            data => {
            
              alert('Room-type updated');
              this.router.navigate(['/admin/room-types']);
              this.getRoomType();
              this.roomtypeForm.reset();
              this.loading = false;
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
    } 
    
    else {
      this.roomtypeService.createRoomType(params)
        .pipe(first())
          .subscribe(
            data => {
              window.alert('Hotel Added')
             
              this.router.navigate(['/admin/room-types']);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            });
    }

    
  }
  
}
