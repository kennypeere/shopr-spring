import {MatFormFieldControl} from "@angular/material";

import {Component, ElementRef, EventEmitter, Input, OnDestroy, Optional, Output, Self} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NgControl} from "@angular/forms";
import {Subject} from "rxjs";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'price-input',
  templateUrl: './price-input.component.html',
  styleUrls: ['./price-input.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: PriceInputComponent}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class PriceInputComponent implements MatFormFieldControl<number>, ControlValueAccessor, OnDestroy {
  static nextId = 0;

  inputMantissa: string = '';
  inputDecimals: string = '';
  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  // ngControl = null;
  errorState = false;
  controlType = 'price-input';
  id = `price-input-${PriceInputComponent.nextId++}`;
  describedBy = '';

  get empty() {
    // const {value: {mantisse, decimals}} = this.parts;
    //
    // return !mantisse && !decimals;
    return (this.inputDecimals === '' && this.inputDecimals === '');
  }

  get shouldLabelFloat() {
    return this.focused || this.inputMantissa != '' || this.inputDecimals != '';
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }

  private _disabled = false;


  @Input()
  get value(): number {
    let resultString: string;

    if (this.inputMantissa === '') {
      this.inputMantissa = '0';
    }
    if (this.inputDecimals === '') {
      this.inputDecimals = '0';
    }
    resultString = this.inputMantissa + '.' + this.inputDecimals;
    return parseFloat(resultString);
  }

  @Output()
  priceValue = new EventEmitter();

  set value(input: number) {
    debugger;
    let mantissa = Math.floor(input);
    this.inputMantissa = mantissa.toString();
    this.inputDecimals = (input - mantissa).toString();
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>, @Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    }

    this.parts = fb.group({
      mantissa: '0',
      decimals: '00',
    });

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }

  fillupMantissa(event: KeyboardEvent, inputFieldDecimals) {
    event.preventDefault();
    if (this.isNumberOrPointOrComma(event.key)) {
      if (this.hasToJump(this.inputMantissa, event.key, 4)) {
        if (this.isZero(this.inputMantissa)) {
          this.inputMantissa = '0';
        }
        inputFieldDecimals.focus();
      }
      else {
        if (parseInt(event.key) || event.key === '0') {
          this.inputMantissa += event.key;
          if (this.hasToJump(this.inputMantissa, event.key, 4)) {
            if (this.isZero(this.inputMantissa)) {
              this.inputMantissa = '0';
            }
            inputFieldDecimals.focus();
          }
        }
      }
    }
  }

  fillupDecimals(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key.match(new RegExp('\\d')) !== null) {
      switch (this.inputDecimals.length) {
        case 0: {
          this.inputDecimals = event.key;
          break;
        }
        case 1: {
          this.inputDecimals += event.key;
          break;
        }
        case 2: {
          this.inputDecimals = this.inputDecimals.charAt(1) + event.key;
          break;
        }
      }
    }
  }

  hasToJump(inputString: string, key: string, length: number): boolean {
    return (inputString.length === length || key === ',' || key === '.');
  }

  isZero(inputString: string): boolean {
    return (inputString === '' || inputString === '00' || inputString === '000' || inputString === '0000');
  }

  isNumberOrPointOrComma(key: string): boolean {
    let regexp = new RegExp('\\d|\\,|\\.');
    return (key.match(regexp) !== null );
  }

  readonly autofilled: boolean;

  registerOnChange(fn: any): void {
    console.log('change')
  }

  registerOnTouched(fn: any): void {
    console.log('touched')
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {

  }

  focusOutDecimals() {
    this.emitValue();
  }

  focusOutMantissa() {
    this.emitValue();
  }

  emitValue() {
    this.priceValue.emit('' + this.inputMantissa + '.' + this.inputDecimals);
  }
}
