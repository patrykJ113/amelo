import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {DropdownOption} from '@typings/dropdown-option';
import {FormControl} from '@angular/forms';
import {NgClass} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';
import {getErrorMessage} from '@helpers/get-error-message';

@Component({
  selector: 'combobox',
  imports: [
    NgClass,
    SvgIconComponent
  ],
  templateUrl: './combobox.html',
  styleUrl: './combobox.css'
})
export class Combobox implements OnInit, OnChanges {
  @Input() options: DropdownOption[] = []
  @Input() label: string = ''
  @Input() control!: FormControl
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChildren('optionElement') optionRef!: QueryList<ElementRef<HTMLDivElement>>;

  inputText: string = ''
  filteredOptions: DropdownOption[] = []
  isOpen: boolean = false
  indexOfFocusedOption: number = 0

  ngOnInit() {
    this.resetFilteredOptions()
    if (this.control.value?.label) {
      this.inputText = this.control.value.label
    }
    this.control.valueChanges.subscribe(value => {
      if (!value) {
        this.inputText = ''
      } else if (value?.label) {
        this.inputText = value.label
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.resetFilteredOptions()
    }
  }

  handleInput(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value
    this.filteredOptions = this.options.filter(
      opt => opt.label.toLowerCase().includes(this.inputText.toLowerCase())
    )
    this.control.setValue(null)
    this.control.markAsDirty()
  }

  handleFocus() {
    this.isOpen = true
  }

  handleBlur() {
    this.setValueOnBlur()
    this.isOpen = false
    this.resetIndex()
    this.resetFilteredOptions()
    this.control.markAsTouched()
  }

  setValueOnBlur() {
    if (!this.inputText) {
      this.control.setValue(null)
      return
    }
    const firstMatch = this.filteredOptions.find(
      opt => opt.label.toLowerCase().startsWith(this.inputText.toLowerCase())
    )
    if (firstMatch) {
      this.control.setValue(firstMatch)
    } else {
      this.control.setValue(null)
    }
  }

  selectOption(option: DropdownOption) {
    this.control.setValue(option)
    this.inputText = option.label
  }

  handleMouseDownOnOption(option: DropdownOption) {
    this.selectOption(option)
  }

  scrollFocusedOptionIntoView() {
    const element = this.optionRef.toArray()[this.indexOfFocusedOption];
    element?.nativeElement.scrollIntoView({block: 'nearest'});
  }

  handleKeyDown({key}: KeyboardEvent) {
    if (key === 'ArrowDown') {
      if (this.indexOfFocusedOption !== this.filteredOptions.length - 1) {
        ++this.indexOfFocusedOption
      } else {
        this.resetIndex()
      }
      this.scrollFocusedOptionIntoView()
    }

    if (key === 'ArrowUp') {
      if (this.indexOfFocusedOption !== 0) {
        --this.indexOfFocusedOption
      } else {
        this.indexOfFocusedOption = this.filteredOptions.length - 1
      }
      this.scrollFocusedOptionIntoView()
    }

    if (key === 'Enter') {
      const option = this.filteredOptions[this.indexOfFocusedOption]
      if (option) {
        this.selectOption(option)
      }
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