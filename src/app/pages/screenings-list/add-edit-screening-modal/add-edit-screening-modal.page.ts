import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { MetabolicScreening } from 'src/app/models/metabolic-screening.model';
import { Attribute } from 'src/app/models/attribute.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'relias-add-edit-screening-modal',
  templateUrl: './add-edit-screening-modal.page.html',
  styleUrls: ['./add-edit-screening-modal.page.scss'],
})
export class AddEditScreeningModalPage implements OnInit {

  Icons = Icons;
  
  mbsForm: FormGroup;

  table: HTMLElement;
  tableAtBottom: boolean = false;

  screening: MetabolicScreening;
  today: Date = new Date();

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.screening = new MetabolicScreening();
    this.setUpForm();

    // hide the see more floating button when the table has scrolled all of the way
    setTimeout(() => {
      this.table = document.getElementById('edit-screening');
      this.table.onscroll = () => {
        const buffer = 20; // we can say we're at the bottom within 20 pixels
        console.log(this.table.scrollTop, this.table.scrollHeight - this.table.clientHeight - buffer)
        this.tableAtBottom = this.table.scrollTop >= this.table.scrollHeight - this.table.clientHeight - buffer;
      }
    });
  }

  setUpForm() {
    // set all of the form validators 
    this.mbsForm = new FormGroup({
      'heightMethod': new FormControl(this.screening.height.method),
      'height': new FormControl(this.screening.height.value, {
        validators: Validators.compose([Validators.min(25.0), Validators.max(99.9)])
      }),
      'weight': new FormControl(this.screening.weight.value, {
        validators: Validators.compose([Validators.min(25), Validators.max(800)])
      }),
      'waist': new FormControl(this.screening.waist.value, {
        validators: Validators.compose([Validators.min(15.0), Validators.max(85.9)])
      }),
      'bpSystolicMethod': new FormControl(this.screening.bpSystolic.method),
      'bpSystolic': new FormControl(this.screening.bpSystolic.value, {
        validators: Validators.compose([Validators.min(40), Validators.max(300)])
      }),
      'bpDiastolic': new FormControl(this.screening.bpDiastolic.value, {
        validators: Validators.compose([Validators.min(30), Validators.max(200)])
      }),
      'totalCholesterolMethod': new FormControl(this.screening.totalCholesterol.method),
      'totalCholesterol': new FormControl(this.screening.totalCholesterol.value, {
        validators: Validators.compose([Validators.min(0), Validators.max(999)])
      }),
      'ldl': new FormControl(this.screening.ldl.value, {
        validators: Validators.compose([Validators.min(0.0), Validators.max(500.0)])
      }),
      'hdl': new FormControl(this.screening.hdl.value, {
        validators: Validators.compose([Validators.min(0.0), Validators.max(500.0)])
      }),
      'triglycerides': new FormControl(this.screening.triglycerides.value, {
        validators: Validators.compose([Validators.min(0.0), Validators.max(3000.0)])
      }),
      'bloodLeadLevelMethod': new FormControl(this.screening.bloodLeadLevel.method),
      'bloodLeadLevel': new FormControl(this.screening.bloodLeadLevel.value, {
        validators: Validators.compose([Validators.min(0), Validators.max(99)])
      }),
      'riskLeadExposure': new FormControl(this.screening.riskLeadExposure.value),
      'bloodGlucoseMethod': new FormControl(this.screening.bloodGlucose.method),
      'bloodGlucose': new FormControl(this.screening.bloodGlucose.value, {
        validators: Validators.compose([Validators.min(25), Validators.max(800)])
      }),
      'hba1cMethod': new FormControl(this.screening.hba1c.method),
      'hba1c': new FormControl(this.screening.hba1c.value, {
        validators: Validators.compose([Validators.min(0.01), Validators.max(0.3)])
      }),
      'bloodOxygenMethod': new FormControl(this.screening.bloodOxygen.method),
      'bloodOxygen': new FormControl(this.screening.bloodOxygen.value, {
        validators: Validators.compose([Validators.min(30.0), Validators.max(100.0)])
      }),
      'pregnant': new FormControl(this.screening.pregnant.value),
      'tobaccoUse': new FormControl(this.screening.tobaccoUse.value),
      'tobaccoUseComment': new FormControl(this.screening.tobaccoUse.comment)
    });
  }

  defaultDateSelected($event) {
    this.setDateToDefault('height', $event);
    this.setDateToDefault('bpSystolic', $event);
    this.setDateToDefault('totalCholesterol', $event);
    this.setDateToDefault('bloodLeadLevel', $event);
    this.setDateToDefault('bloodGlucose', $event);
    this.setDateToDefault('hba1c', $event);
    this.setDateToDefault('bloodOxygen', $event);
    this.setDateToDefault('pregnant', $event);
    this.setDateToDefault('tobaccoUse', $event);
    this.screening.defaultDate = $event;
  }
  
  setDateToDefault(field: string, date: Date) {
    if (this.screening[field].date === this.screening.defaultDate) {
      this.screening[field].date = date;
    }
  }

  dateSelected($event, attribute: Attribute) {
    attribute.date = $event;
  }

  showMore() {
    this.table.scroll({
      top: this.table.scrollTop + this.table.clientHeight - 45,
      behavior: 'smooth'
    });
  }

  toggleOptOut(attr: Attribute) {
    attr.optOut = !attr.optOut;
  }
  
  get height() { return this.mbsForm.get('height'); }
  get weight() { return this.mbsForm.get('weight'); }

  async closeModal() {
    const alert = await this.alertCtrl.create({
      header: 'Discard Changes',
      message: 'Are you sure you want to discard all changes? This cannot be undone.',
      mode: 'md',
      buttons: [
        { 
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Discard',
          handler: () => {
            this.modalCtrl.dismiss();
          }
        }
      ]
    })
    alert.present();
  }

  async save() {
    const toSave = new MetabolicScreening();

    Object.entries(this.mbsForm.controls).forEach(r => {
      const attributeKey = r[0];
      const formControl = r[1];

      switch(attributeKey) {
        case 'weight':
        case 'waist':
        case 'height':
          toSave[attributeKey] = this.setValuesFromForm('height', attributeKey, formControl)
          break;
        case 'bpDiastolic':
        case 'bpSystolic':
          toSave[attributeKey] = this.setValuesFromForm('bpSystolic', attributeKey, formControl)
          break;
        case 'ldl':
        case 'hdl':
        case 'triglycerides':
        case 'totalCholesterol':
          toSave[attributeKey] = this.setValuesFromForm('totalCholesterol', attributeKey, formControl)
          break;
        case 'riskLeadExposure':
        case 'bloodLeadLevel':
          toSave[attributeKey] = this.setValuesFromForm('bloodLeadLevel', attributeKey, formControl)
          break;
        case 'bloodGlucose':
          toSave[attributeKey] = this.setValuesFromForm('bloodGlucose', attributeKey, formControl)
          break;
        case 'hba1c':
          toSave[attributeKey] = this.setValuesFromForm('hba1c', attributeKey, formControl)
          break;
        case 'bloodOxygen':
          toSave[attributeKey] = this.setValuesFromForm('bloodOxygen', attributeKey, formControl)
          break;
        case 'pregnant':
          toSave[attributeKey] = this.setValuesFromForm('pregnant', attributeKey, formControl)
          break;
        case 'tobaccoUse':
          toSave[attributeKey] = this.setValuesFromForm('tobaccoUse', attributeKey, formControl)
          break;
        case 'tobaccoUseComment':
          // assign the tobacco use comment here if need be
          if (toSave.tobaccoUse && formControl.value) {
            toSave.tobaccoUse.comment = formControl.value;
          }
          break;
        default:
          // there are some keys like the methods that we do nothing with
          break;
      }
    });

    console.log('TODO: SAVE THE THING:', toSave);
  }

  setValuesFromForm(topLevelKey: string, attributeKey: string, formControl: AbstractControl): Attribute|null {
    const topLevelAttribute: Attribute = this.screening[topLevelKey];
    const topLevelMethod: AbstractControl = this.mbsForm.get(topLevelKey + 'Method');
    
    // if this group of form controls is is opted out, 
    // delete the unnecessary data and set optOut to true
    if (topLevelAttribute.optOut) {
      this.screening[attributeKey].optOut = true;
      this.screening[attributeKey].method = null;
      this.screening[attributeKey].comment = null;
      this.screening[attributeKey].value = null;
      this.screening[attributeKey].date = topLevelAttribute.date;
    }
    // if this form control has been touched and isn't null
    // or undefined, get the date and method from the top 
    // level attribute in this group and its own form control
    // value so we can save it
    else if (!formControl.pristine && !_.isNil(formControl.value)) {
      this.screening[attributeKey].date = topLevelAttribute.date;
      this.screening[attributeKey].value = formControl.value;

      // most of the groups have a method select form control
      // but some such as Tobacco Use and Pregnant do not
      if (topLevelMethod) {
        this.screening[attributeKey].method = topLevelMethod.value;
      }
    }
    // if we got to this point, there's nothing about this 
    // attribute that we need to save, so simply discard it 
    // from the screening object
    else {
      return null;
    }

    return this.screening[attributeKey];
  }

  async saveAndDismiss() {
    await this.save();
    this.modalCtrl.dismiss();
  }

  async saveAndEnterAnother() {
    await this.save();
    const toast = await this.toastCtrl.create({
      message: 'Metabolic Screening Data saved for ' + this.screening.memberName,
      cssClass: 'notification success',
      duration: 5000
    });
    toast.present();
    this.screening = new MetabolicScreening();
    this.setUpForm();
    this.table.scrollTo({top: 0, behavior: 'smooth'});
  }
}
