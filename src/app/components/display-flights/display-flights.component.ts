import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {

  data:any;

  constructor(private reservationService:ReservationService, private router:Router) { }

  ngOnInit(): void {
    this.data = this.reservationService.flightData;
  }

  public onSelect(id:number): any {
    this.router.navigate(['/passengerDetails/'+id]);
  }

}
