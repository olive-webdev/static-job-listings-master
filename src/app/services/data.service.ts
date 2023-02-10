import { Injectable } from '@angular/core';
import * as data from '../data/data.json'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any = (data as any).default
  filter = new BehaviorSubject<string[]>([])
  constructor() { }
}
