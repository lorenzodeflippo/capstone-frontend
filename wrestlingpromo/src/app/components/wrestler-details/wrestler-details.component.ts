import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrestler-details',
  templateUrl: './wrestler-details.component.html',
  styleUrls: ['./wrestler-details.component.scss'],
})
export class WrestlerDetailsComponent implements OnInit {
  wrestlerId: string;

  constructor(private route: ActivatedRoute) {
    this.wrestlerId = '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.wrestlerId = id !== null ? id : '';
  }
}
