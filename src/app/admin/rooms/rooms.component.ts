import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/_services/room.service';
import { Rooms } from 'src/app/_models/rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  public Rooms: Rooms[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getAll()
      .subscribe(Rooms=> {
        this.Rooms = Rooms;
      })
    }


}
