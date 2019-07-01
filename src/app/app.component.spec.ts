import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AppModule } from './app.module';
describe('AppComponent', () => {
  let fixture;
  let app
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        AppModule
      ],
      declarations: [
        // AppComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get {openModal()} called', () => {
    const openModalSyp = spyOn(app['modalService'], 'open').and.callThrough();
    app.openModal();
    expect(openModalSyp).toHaveBeenCalled();
  })
  it('should get {getUserAppointment()} called', () => {
    const getUserAppointmentSyp = spyOn(app, 'getUserAppointment').and.callThrough();
    app.getUserAppointment();
    expect(getUserAppointmentSyp).toHaveBeenCalled();
  })
});
