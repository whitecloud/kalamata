import { Injectable } from '@angular/core';
import { MetabolicScreening } from '../models/metabolic-screening.model';

@Injectable({
  providedIn: 'root'
})
export class ScreeningsService {

  constructor() {}

  async getScreenings(): Promise<MetabolicScreening[]> {
    return [
      new MetabolicScreening()
    ]
  }
}
