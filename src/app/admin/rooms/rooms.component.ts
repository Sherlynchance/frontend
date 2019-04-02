import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RoomService } from 'src/app/_services/room.service';
import { Rooms } from 'src/app/_models/rooms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @ViewChild('imageFile') imageFileRef: ElementRef;

  roomForm: FormGroup;
  loading = false;
  submitted = false;

  public Rooms: Rooms[];
  selectedRooms: Rooms = {
    id: null,
    room_image: null,
    room_description: null,
    hotel_id: null,
    room_type_id: null
  };

  constructor(
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService) {
  }

  get f() { return this.roomForm.controls; }

  ngOnInit() {
    this.roomService.getAll()
      .subscribe(Rooms => {
        this.Rooms = Rooms;
      });

    this.roomForm = this.formBuilder.group({
      id: [null],
      room_image: [''],
      room_description: [''],
      hotel_id: [''],
      room_type_id: ['']
    });
  }
  
  onAddSubmit() {
    let files = this.imageFileRef.nativeElement.files;

    if (files.length > 0) {
      files = files[0];
    } else {
      files = null;
    }

    this.submitted = true;
    this.loading = true;

    
    const params = this.roomForm.getRawValue();

    
    if (params.id) {
      delete params['room_image'];
      this.roomService.updateRoom(params)
        .pipe(first())
        .subscribe(
          data => {
           
            alert('Room updated');
            this.router.navigate(['/admin/rooms']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
    
    else {
      this.roomService.createRoom(params, files)
        .pipe(first())
        .subscribe(
          data => {
            window.alert('Room Added')
           
            this.router.navigate(['/admin/rooms']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
    }
  }

  editRoom(Room) {
    console.log(Room);
    // this.roomForm.setValue(Room);

    this.roomForm.setValue({
      id: Room.id,
      room_description: Room.room_description,
      room_image: Room.room_image,
      hotel_id: Room.hotel_id,
      room_type_id: Room.room_type_id
      // hotel_id: facility.hotel_id
    });
  }

  deleteRoom(id){
    this.roomService.deleteRoom(id)
      .subscribe((room: Rooms) => {
        window.alert("Room Type deleted");
        console.log('Room type deleted, ', room);
      });
  }
}
