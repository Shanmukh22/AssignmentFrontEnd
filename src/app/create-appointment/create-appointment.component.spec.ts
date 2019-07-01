import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CreateAppointmentComponent } from './create-appointment.component';
import { of } from 'rxjs';
describe('CreateAppointmentComponent', () => {
  let component: CreateAppointmentComponent;
  let fixture: ComponentFixture<CreateAppointmentComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreateAppointmentComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule
      ],
      providers: [NgbActiveModal]
    });
    fixture = TestBed.createComponent(CreateAppointmentComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('should call ngOnInit', () => {
    const ngOnInitSpy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(ngOnInitSpy).toHaveBeenCalled();
  });
  it('should call close', () => {
    const closeSpy = spyOn(component, 'close').and.callThrough();
    component.close();
    expect(closeSpy).toHaveBeenCalled();
  });
  it('should call toggleMeridian', () => {
    const toggleMeridianSpy = spyOn(component, 'toggleMeridian').and.callThrough();
    component.toggleMeridian();
    expect(toggleMeridianSpy).toHaveBeenCalled();
  });
  it('should call createAppointment', () => {
    component.ngOnInit();
    console.log("Sample",component.appointmentForm.value)
    const saveUserSpy = spyOn(component.http, 'post').and.returnValue(of({}));
    component.createAppointment();
    expect(saveUserSpy).toHaveBeenCalled();
  });

});
