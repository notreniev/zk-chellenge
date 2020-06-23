import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faAngleLeft as left, faAngleRight as right } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  faAngleDoubleLeft = left;
  faAngleDoubleRight = right;

  @Input() schedule: any;
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;

  appointmentsList = [];
  dates: any = [];
  appointment: any = {};

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 155), behavior: 'smooth' });
  }

  setDate(date) {
    //console.log('date', date);
    this.dates[0] = date;
  }

  setTime(time){
    //console.log('time', time);
    this.dates[1] = time;
    this.getData();
  }

  getData(){
    this.appointment = {
      date: this.dates[0],
      time: this.dates[1]
    };

    this.appointmentsList.push(this.appointment);
    // sessionStorage.removeItem('date');
    // sessionStorage.removeItem('time');
    //console.log('dates', this.appointment);
  }

  constructor() {
  }


  ngOnInit(): void {
  }

}
