import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appoitmentModal:any={};
  isUserFetched:boolean=false;
  time = {hour: 13, minute: 30};
  baseUrl:any=environment.config.baseUrl;
  confirmationCode
  meridian = true;
  constructor(private activeModal: NgbActiveModal,public http:HttpClient) { }

  ngOnInit() {
  }
  close() {
    this.activeModal.close();
  }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  getUserAppointment(){
    console.log(this.confirmationCode);
    this.http.get(`${this.baseUrl}user/getUsersConfirmation/${this.confirmationCode}`)
        .subscribe(res =>{
          let response = res;
          response['dob']=`${res['dob'].year}-${res['dob'].month}-${res['dob'].day}`;
          response['appointment']=`${res['appointment'].year}-${res['appointment'].month}-${res['appointment'].day}`;
          this.appoitmentModal = response;
          this.isUserFetched=true;
        },err=>{
          this.isUserFetched=false;
        });
  }
}
