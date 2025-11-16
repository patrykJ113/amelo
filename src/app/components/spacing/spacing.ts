import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {Gap} from '@typings/gap';
import {ItemsAlignment} from '@typings/items-alignment';
import {JustifyAlignment} from '@typings/justify-alignment';
import {Direction} from '@typings/direction';

@Component({
  selector: 'spacing',
  imports: [
    NgClass
  ],
  templateUrl: './spacing.html',
  styleUrl: './spacing.css'
})
export class Spacing {
  @Input() gap: Gap = '0'
  @Input() items: ItemsAlignment = 'stretch';
  @Input() justify: JustifyAlignment = 'start'
  @Input() direction: Direction = 'vertical'

  get gapClass() {
    return `gap-${this.gap}`
  }

  get itemsClass() {
    return `items-${this.items}`
  }

  get justifyClass() {
    return `justify-${this.justify}`
  }

  get isVertical() {
    return this.direction === 'vertical'
  }
}
