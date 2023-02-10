import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { DataService } from './services/data.service'
import { Job } from './interfaces/job'
import { trigger, transition, query, style, stagger, animate, state, keyframes } from '@angular/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger("inOutAnimation", [
      transition(":enter", [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100vw)' }),
            style({ opacity: 1, transform: 'translateX(0)' }),
          ])
        )
      ]),
      transition(":leave", [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)' }),
            style({ opacity: 0, transform: 'translateX(100vw)' }),
          ])
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'static-job-listings-master';
  Jobs!: Job[]
  filter!: string[]

  constructor(private data: DataService) { }


  ngOnInit(): void {
    this.Jobs = this.data.data
    this.data.filter.subscribe(value => this.filter = value)
  }

  removeTag(item: string) {
    this.data.filter.next(this.data.filter.value.filter(value => value !== item))
  }

  identify(index: number, item: Job): number {
    return item.id
  }
  
  eraseAllTags() {
    this.data.filter.next([])
  }

  ngOnDestroy(): void {
    this.data.filter.unsubscribe()
  }
}
