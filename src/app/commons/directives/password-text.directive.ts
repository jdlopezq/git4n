import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[passwordText]'
})
export class PasswordTextDirective {
  private el: NgControl;

  constructor(private ngControl: NgControl) {
    this.el = ngControl;
  }

  // Listen for the input event to also handle copy and paste.
  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    if (this.el.control) {
      // Use NgControl patchValue to prevent the issue on validation
      this.el.control.patchValue(value.replace(/[^A-Za-z0-9]/g, ''));
    }
  }
}
