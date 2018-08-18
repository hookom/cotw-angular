import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { FormStepComponent } from './form-step.component';

import { faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cotw-form',
  template:
  `<div class="stepForm">
    <button type="button" (click)="previous()" [ngClass]="{'hidden-btn': !hasPrevStep}">
      <fa-icon [icon]="faHandPointLeft"></fa-icon>
    </button>
    <ng-content></ng-content>
    <button type="button" (click)="next()" [disabled]="!_activeStep.isValid" [ngClass]="{'hidden-btn': !hasNextStep}">
      <fa-icon [icon]="faHandPointRight"></fa-icon>
    </button>
  </div>`
  ,
  styleUrls: ['form.component.css']
})
export class FormComponent implements AfterContentInit {
  faHandPointLeft = faHandPointLeft;
  faHandPointRight = faHandPointRight;

  @ContentChildren(FormStepComponent)
  formSteps: QueryList<FormStepComponent>;

  private _steps: Array<FormStepComponent> = [];
  private _activeStep: FormStepComponent;
  private _activeIndex: number;

  constructor() { }

  ngAfterContentInit() {
    console.log('in afterinit')
    this.formSteps.forEach(step => this._steps.push(step));
    this._activeStep = this._steps[0];
    this._activeStep.isActive = true;
    this._activeIndex = 0;
  }

  get hasNextStep(): boolean {
    return this._activeIndex < this._steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this._activeIndex > 0;
  }

  public next(): void {
    if (this.hasNextStep) {
      this._activeStep.isActive = false;
      this._activeIndex += 1;
      this._activeStep = this._steps[this._activeIndex];
      this._activeStep.isActive = true;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      this._activeStep.isActive = false;
      this._activeIndex -= 1;
      this._activeStep = this._steps[this._activeIndex];
      this._activeStep.isActive = true;
    }
  }

}
