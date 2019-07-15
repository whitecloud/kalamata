import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { MetabolicScreening } from '../models/metabolic-screening.model';

@Injectable({
  providedIn: 'root'
})
export class ScreeningsService {

  constructor(
  ) { }

  async getScreenings(): Promise<MetabolicScreening[]> {
    return [
      new MetabolicScreening()
    ]
  }
}
