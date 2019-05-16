import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public currentSegment: string;
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.currentSegment = ev.detail.value;
  }
}
