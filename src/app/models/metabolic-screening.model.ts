import { Attribute } from './attribute.model';

/**
 * When saving and POSTing to the server for the add/edit experience
 * only pass the Attributes that have changed, leave others null
 * This way edits don't have to pass all fields, only changes
 */
export class MetabolicScreening {
  memberId: number;
  memberName: string;
  defaultDate: Date; // unix timestamp?
  lastModifiedBy: string; // user full name
  
  height: Attribute;
  weight: Attribute;
  waist: Attribute;
  bpSystolic: Attribute;
  bpDiastolic: Attribute;
  totalCholesterol: Attribute;
  ldl: Attribute;
  hdl: Attribute;
  triglycerides: Attribute;
  bloodLeadLevel: Attribute;
  riskLeadExposure: Attribute;
  bloodGlucose: Attribute;
  hba1c: Attribute;
  bloodOxygen: Attribute;
  pregnant: Attribute;
  tobaccoUse: Attribute;

  // firebase client only fields
  id?: string;
  exists?: boolean;

  constructor(screening?: MetabolicScreening) {
    const now = new Date;
    
    this.setOrDefault(screening, 'id');
    this.setOrDefault(screening, 'exists');

    this.setOrDefault(screening, 'memberId', 1);
    this.setOrDefault(screening, 'memberName', 'Aztecan, Ishwar');
    this.setOrDefault(screening, 'defaultDate', now);
    this.setOrDefault(screening, 'lastModifiedBy', 'Taylor, Matt (Relias)');

    this.setOrDefault(screening, 'height', new Attribute(now, 'Actual'));
    this.setOrDefault(screening, 'weight', new Attribute(now));
    this.setOrDefault(screening, 'waist', new Attribute(now));
    this.setOrDefault(screening, 'bpSystolic', new Attribute(now, 'Automated'));
    this.setOrDefault(screening, 'bpDiastolic', new Attribute(now));
    this.setOrDefault(screening, 'totalCholesterol', new Attribute(now, 'Fasting'));
    this.setOrDefault(screening, 'ldl', new Attribute(now));
    this.setOrDefault(screening, 'hdl', new Attribute(now));
    this.setOrDefault(screening, 'triglycerides', new Attribute(now));
    this.setOrDefault(screening, 'bloodLeadLevel', new Attribute(now, 'Actual'));
    this.setOrDefault(screening, 'riskLeadExposure', new Attribute(now));
    this.setOrDefault(screening, 'bloodGlucose', new Attribute(now, 'Actual'));
    this.setOrDefault(screening, 'hba1c', new Attribute(now, 'Actual'));
    this.setOrDefault(screening, 'bloodOxygen', new Attribute(now, 'Automated'));
    this.setOrDefault(screening, 'pregnant', new Attribute(now));
    this.setOrDefault(screening, 'tobaccoUse', new Attribute(now));
  }

  setOrDefault(screening: MetabolicScreening = null, property: string, defaultValue?: any) {
    if (screening && screening[property]) {
      const value = screening[property];
      if (value.date && value.date.seconds) {
        value.date = new Date(value.date.seconds * 1000);
      }
      this[property] = value;
    } else {
      this[property] = defaultValue;
    }
  }
}