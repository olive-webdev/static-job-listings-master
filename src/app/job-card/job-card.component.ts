import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Job } from '../interfaces/job'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit{
  @Input() job!: Job

  constructor(private data: DataService) { }
  
  ngOnInit(): void {
  }

  selectTag(tag: string) {
    if (!this.data.filter.value.includes(tag)) {
      this.data.filter.next([...this.data.filter.value, tag])
    }
  }
}
