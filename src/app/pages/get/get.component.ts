import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { PeakService } from 'src/app/services/peak.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent {

  searchNumber: number;

  result: string;

  constructor(private peakService: PeakService) { }

  search() : void {
    this.peakService.get(this.searchNumber).pipe(take(1)).subscribe(res => {
      this.result = res;
    })
  }

}
