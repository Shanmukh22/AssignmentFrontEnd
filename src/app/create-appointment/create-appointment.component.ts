import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  appoitmentModal: any = {};
  baseUrl: any = environment.config.baseUrl;
  time = { hour: 13, minute: 30 };
  meridian = true;

  appointmentForm: FormGroup;
  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public http: HttpClient) {

  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.appointmentForm = this.fb.group({
      firstName: [null,Validators.compose([Validators.required])],
      lastName: [null],
      emailId: [null,Validators.compose([Validators.required])],
      dob: [null,Validators.compose([Validators.required])],
      appointment:[null,Validators.compose([Validators.required])],
      time:[null,Validators.compose([Validators.required])]
    });
  }

  close() {
    this.activeModal.close();
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  createAppointment() {

    this.appointmentForm.value.confirmationCode = `${Math.random().toString(36).substring(7)}`;
    this.http.post(`${this.baseUrl}user/saveUser`, this.appointmentForm.value)
      .subscribe((res) => {
        swal.fire({
          title: 'Confirmation Code',
          text: this.appointmentForm.value.confirmationCode,
          showCancelButton: true,
        });
        this.close();
        console.log(res);

      });
    console.log(this.appointmentForm.value);

  }
}
