import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {DropdownOption} from '@typings/dropdown-option';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';
import {getErrorMessage} from '@helpers/get-error-message';

@Component({
  selector: 'combobox',
  imports: [
    ReactiveFormsModule,
    NgClass,
    SvgIconComponent
  ],
  templateUrl: './combobox.html',
  styleUrl: './combobox.css'
})
export class Combobox implements OnInit {
  @Input() options: DropdownOption[] = []
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() control!: FormControl
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChildren('optionElement') optionRef!: QueryList<ElementRef<HTMLDivElement>>;
  filteredOptions: DropdownOption[] = []
  isOpen: boolean = false
  indexOfFocusedOption: number = 0

  ngOnInit() {
    this.resetFilteredOptions()
    if (this.disabled) this.control.disable()
  }

  handleInput() {
    this.filteredOptions = this.options.filter(
      opt => opt.label.toLowerCase().includes(this.control.getRawValue().toLowerCase())
    )
  }

  handleFocus() {
    this.isOpen = true
  }

  handleBlur() {
    this.setValueOnBlur()
    this.isOpen = false
    this.resetIndex()
    this.resetFilteredOptions()
  }

  setValueOnBlur() {
    const value = this.control.getRawValue().toLowerCase()
    if (!value) return
    const firstMatchedOption = this.filteredOptions.find(option => option.label.toLowerCase().startsWith(value))
    if(firstMatchedOption) this.control.setValue(firstMatchedOption.label)
  }

  handleMouseDownOnOption(option: DropdownOption) {
    this.control.setValue(option.label)
  }

  scrollFocusedOptionIntoView() {
    const element = this.optionRef.toArray()[this.indexOfFocusedOption];
    element?.nativeElement.scrollIntoView({block: 'nearest'});
  }

  handleKeyDown({key}: KeyboardEvent) {
    if (key === 'ArrowDown') {
      if (this.indexOfFocusedOption !== this.options.length - 1) {
        ++this.indexOfFocusedOption
      } else {
        this.resetIndex()
      }
      this.scrollFocusedOptionIntoView();
    }

    if (key === 'ArrowUp') {
      if (this.indexOfFocusedOption !== 0) {
        --this.indexOfFocusedOption
      } else {
        this.indexOfFocusedOption = this.options.length - 1
      }
      this.scrollFocusedOptionIntoView()
    }

    if (key === 'Enter') {
      this.control.setValue(this.options[this.indexOfFocusedOption].label)
      this.inputRef.nativeElement.blur()
    }

    if (key === 'Escape') {
      this.inputRef.nativeElement.blur()
    }
  }

  get isError() {
    return this.control.invalid && (this.control.touched || this.control.dirty)
  }

  resetIndex() {
    this.indexOfFocusedOption = 0
  }

  resetFilteredOptions() {
    this.filteredOptions = this.options
  }

  getErrorMsg() {
    return getErrorMessage(this.control, this.label)
  }
}
