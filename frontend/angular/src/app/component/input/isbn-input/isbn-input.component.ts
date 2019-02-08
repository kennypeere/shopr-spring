export class IsbnStructure {
  constructor(public segment1: string, public segment2: string, public segment3: string, public segment4: string, public segment5: string) {}
}

import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldControl} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {FocusMonitor} from "@angular/cdk/a11y";

@Component({
  selector: 'isbn-input',
  templateUrl: './isbn-input.component.html',
  styleUrls: ['./isbn-input.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: IsbnInputComponent}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class IsbnInputComponent implements MatFormFieldControl<IsbnStructure>, OnDestroy {
  static nextId = 0;

  parts: FormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  ngControl = null;
  errorState = false;
  controlType = 'example-tel-input';
  id = `isbn-input-${IsbnInputComponent.nextId++}`;
  describedBy = '';

  get empty() {
    const {value: {segment1, segment2, segment3, segment4, segment5}} = this.parts;

    return !segment1 && !segment2 && !segment3 && !segment4 && !segment5;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): IsbnStructure | null {
    const {value: {segment1, segment2, segment3, segment4, segment5}} = this.parts;
    if (segment1.length === 3 &&
      segment2.length === 2 &&
      segment3.length === 4 &&
      segment4.length === 3 &&
      segment5.length === 1) {
      return new IsbnStructure(segment1, segment2, segment3, segment4, segment5);
    }
    return null;
  }
  set value(tel: IsbnStructure | null) {
    const {segment1, segment2, segment3, segment4, segment5} = tel || new IsbnStructure('', '', '', '', '');
    this.parts.setValue({segment1, segment2, segment3, segment4, segment5});
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = fb.group({
      segment1: '',
      segment2: '',
      segment3: '',
      segment4: '',
      segment5: '',
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
}
