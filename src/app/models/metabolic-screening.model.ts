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

  constructor() {
    const now = new Date;

    this.memberId = 1;
    this.memberName = 'Aztecan, Ishwar'
    this.defaultDate = now;
    this.lastModifiedBy = 'Taylor, Matt (Relias)'

    this.height = new Attribute(now, 'Actual');
    this.weight = new Attribute(now);
    this.waist = new Attribute(now);
    this.bpSystolic = new Attribute(now, 'Automated');
    this.bpDiastolic = new Attribute(now);
    this.totalCholesterol = new Attribute(now, 'Fasting');
    this.ldl = new Attribute(now);
    this.hdl = new Attribute(now);
    this.triglycerides = new Attribute(now);
    this.bloodLeadLevel = new Attribute(now, 'Actual');
    this.riskLeadExposure = new Attribute(now);
    this.bloodGlucose = new Attribute(now, 'Actual');
    this.hba1c = new Attribute(now, 'Actual');
    this.bloodOxygen = new Attribute(now, 'Automated');
    this.pregnant = new Attribute(now);
    this.tobaccoUse = new Attribute(now);
  }
}