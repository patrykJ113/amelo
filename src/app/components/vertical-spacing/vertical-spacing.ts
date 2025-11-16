import {Component, Input} from '@angular/core';
import {Gap} from '@typings/gap';
import {ItemsAlignment} from '@typings/items-alignment';
import {JustifyAlignment} from '@typings/justify-alignment';
import {Spacing} from '@components/spacing/spacing';

@Component({
  selector: 'vertical-spacing',
  imports: [
    Spacing
  ],
  templateUrl: './vertical-spacing.html',
  styleUrl: './vertical-spacing.css'
})
export class VerticalSpacing {
  @Input() gap: Gap = '0';
  @Input() items: ItemsAlignment = 'stretch'
  @Input() justify: JustifyAlignment = 'start'
}
