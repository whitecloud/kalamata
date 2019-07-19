import { Component, OnInit } from '@angular/core';
import { Icons } from 'src/app/components/icon/icons.enum';
import { ModalController, AlertController } from '@ionic/angular';
import { MetabolicScreening } from 'src/app/models/metabolic-screening.model';
import { Attribute } from 'src/app/models/attribute.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.screening = new MetabolicScreening();
    this.setUpForm();

    // hide the see more floating button when the table has scrolled all of the way
    setTimeout(() => {
      this.table = document.getElementById('edit-screening');
      this.table.onscroll = () => {
        this.tableAtBottom = this.table.scrollTop >= this.table.clientHeight;
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
  
  get height() { return this.mbsForm.get('height').value; }
  get weight() { return this.mbsForm.get('weight').value; }

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

  save() {
    console.log(this.screening, this.mbsForm);
    Object.entries(this.mbsForm.controls).forEach(r => {
      console.log(r);
    });
  }

  saveAndEnterAnother() {

  }
}
