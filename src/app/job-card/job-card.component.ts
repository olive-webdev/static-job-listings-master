import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Job } from '../interfaces/job'
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class JobCardComponent{
  @Input() job!: Job

  constructor(private data: DataService) { }

  selectTag(tag: string) {
    if (!this.data.filter.value.includes(tag)) {
      this.data.filter.next([...this.data.filter.value, tag])
    }
  }
}
