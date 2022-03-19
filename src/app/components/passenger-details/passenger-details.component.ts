import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  public flightData:any;

  reservation:Reservation = new Reservation('', '', '', '', '', '', '', '', '');

  constructor(private reservationService:ReservationService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservationService.getFlight(Number.parseInt(JSON.parse(this.route.snapshot.paramMap.get('id') || '{}'))).subscribe((resp: any)=>{
      this.flightData = resp;
    })
  }

  public onSubmit() {
    this.reservation.flight_id = this.flightData.id;
    this.reservationService.saveReservation(this.reservation).subscribe((resp: any)=>{
      this.router.navigate(['/confirmReservation/'+resp.id, resp.id]);
    })
  }

}
