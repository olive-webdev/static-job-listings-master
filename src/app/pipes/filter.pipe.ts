import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../interfaces/job'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor() {
    
  }


  transform(jobs: Job[], filters: string[]): Job[] {
    if (filters.length !== 0) {


      return jobs.filter((job) => filters.every(filter => [job.role, job.level, ...job.languages, ...job.tools].includes(filter)))

    }
    else {
      return jobs
    }
  }

}
