import { Component, ViewChild } from '@angular/core';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shanmukhAssgnment'; baseUrl:any=environment.config.baseUrl;
  confirmationCode:string;
  // @ViewChild('createAppointmentModal') createAppointmentModal:CreateAppointmentComponent;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  openModal() {
    this.modalService.open(CreateAppointmentComponent);
  }

  getUserAppointment() {
        const viewAppointmentModal=this.modalService.open(ViewAppointmentComponent);
  }
}
