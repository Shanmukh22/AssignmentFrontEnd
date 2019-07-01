import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAppointmentComponent } from './view-appointment.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { of, throwError } from 'rxjs';
describe('ViewAppointmentComponent', () => {
  let component: ViewAppointmentComponent;
  let fixture: ComponentFixture<ViewAppointmentComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ViewAppointmentComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule
      ],
      providers: [NgbActiveModal]
    });
    fixture = TestBed.createComponent(ViewAppointmentComponent);
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
  it('should call getUserAppointment', () => {
    const getUserAppointmentSpy = spyOn(component, 'getUserAppointment').and.callThrough();
    component.getUserAppointment();
    expect(getUserAppointmentSpy).toHaveBeenCalled();
  });
  it('should call API getUsersConfirmation success', () => {
    const getUsersConfirmationSpy = spyOn(component['http'], 'get').and.returnValue(of({}));
    component.getUserAppointment();
    expect(getUsersConfirmationSpy).toHaveBeenCalled();
  });
  it('should call API getUsersConfirmation error', () => {
    const getUsersConfirmationSpy = spyOn(component['http'], 'get').and.returnValue(throwError({}));
    component.getUserAppointment();
    expect(getUsersConfirmationSpy).toHaveBeenCalled();
  });
});

