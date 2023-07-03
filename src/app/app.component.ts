import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.print();
  }
  title = 'TestApp';
  details = navigator.userAgent
  regexp = /android|iphone|kindle|ipad/i;

  public print() {
    let isMobileDevice = this.regexp.test(this.details);
    console.log(isMobileDevice);
  }
}
