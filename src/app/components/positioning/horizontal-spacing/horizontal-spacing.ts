import {Component, Input} from '@angular/core';
import {Gap} from '@typings/gap';
import {ItemsAlignment} from '@typings/items-alignment';
import {JustifyAlignment} from '@typings/justify-alignment';
import {Spacing} from '@components/positioning/spacing/spacing';

@Component({
  selector: 'horizontal-spacing',
  imports: [
    Spacing
  ],
  templateUrl: './horizontal-spacing.html',
  styleUrl: './horizontal-spacing.css'
})
export class HorizontalSpacing {
  @Input() gap: Gap = '0'
  @Input() items: ItemsAlignment = 'stretch'
  @Input() justify: JustifyAlignment = 'start'
}
