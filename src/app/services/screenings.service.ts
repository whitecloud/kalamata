import { Injectable } from '@angular/core';
import { MetabolicScreening } from '../models/metabolic-screening.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ScreeningsService {
  screeningsRef: AngularFirestoreCollection<MetabolicScreening>;

  constructor(private afs: AngularFirestore) {
    this.screeningsRef = this.afs.collection('screenings');
  }

  addScreening(screening: MetabolicScreening) {
    console.log()
    this.screeningsRef.add(this.sanitize(screening));
  }

  updateScreening(id: string, screening: MetabolicScreening) {
    this.screeningsRef.doc(id).update(this.sanitize(screening));
  }

  getScreenings(): Observable<MetabolicScreening[]> {
    return this.screeningsRef
      .snapshotChanges()
      .pipe(map(actions => {
        return _(actions)
          .map(this.mapScreenings.bind(this))
          .sortBy('defaultDate')
          .value();
      }));
  }

  /**
   * Take the DocumentChangeAction objects from the snapshotChanges observable and convert 
   * it to the MetabolicScreening objects with the id and exists properties as some metadata
   * @param screening 
   */
  mapScreenings(screening): MetabolicScreening {
    const doc = screening.payload.doc || screening.payload;

    const data = doc.data();
    const id = doc.id;
    const exists = doc.exists;

    data.defaultDate = new Date(data.defaultDate.seconds * 1000);

    return {id, exists, ...data};
  }

  /**
   * Given a metabolic screening object, remove any metadata that might exist on the object
   * before saving it back to firebase, we don't need these properties there
   * @param incomingScreening
   */
  sanitize(incomingScreening: MetabolicScreening) {
    const screening = _.cloneDeep(incomingScreening);
    return _.omit(screening, ['id', 'exists']);
  }
}
