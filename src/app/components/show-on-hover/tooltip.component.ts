import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {PositionService} from '@services/position.service';
import {NgClass, NgStyle} from '@angular/common';
import {Position} from '@typings/position';
import {Variant} from '@typings/variant';

@Component({
  selector: 'tooltip',
  imports: [
    HorizontalSpacing,
    SvgIconComponent,
    VerticalSpacing,
    NgStyle,
    NgClass
  ],
  host: {
    '(window:scroll)': 'setTooltipPosition()'
  },
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class Tooltip implements AfterViewInit {
  tooltipPosition: Position = {
    left: '0px',
    right:  null,
    top:  null,
    bottom:  'calc(100% + 20px)'
  }

  triangleStyle: { transform: string | null } & Position = {
    left: '0px',
    right:  null,
    top:  null,
    bottom:  'calc(100% + 20px)',
    transform: null
  }

  @Input() debug: boolean = false
  @Input() title: string = ''
  @Input() description: string = ''
  @Input() variant: Variant = 'Info'
  @Input() showTooltip: boolean = true
  @ViewChild('tooltip') tooltip!: ElementRef
  @ViewChild('trigger') trigger!: ElementRef
  @ViewChild('triangle') triangle!: ElementRef

  constructor(private positionService: PositionService) {
  }

  ngAfterViewInit() {
    this.setTooltipPosition()
  }

  get isInfo() {
    return this.variant === 'Info'
  }

  get isError() {
    return this.variant === 'Error'
  }

  get isSuccess() {
    return this.variant === 'Success'
  }

  get isWarning() {
    return this.variant === 'Warning'
  }

  get src() {
    switch(this.variant) {
      case "Success":
        return 'check-circle-solid.svg'
      case "Warning":
        return 'exclamation-triangle-solid.svg'
      case "Error":
        return 'exclamation-circle-solid.svg'
      default:
        return 'information-circle-solid.svg'
    }
  }

  setTooltipPosition() {
    const size = this.positionService.elementSize.bind(this.positionService);

    const tooltip = size(this.tooltip);
    const trigger = size(this.trigger);

    const offset = 20;
    const triangle = 9.5;

    const showTop = tooltip.height + offset + triangle + 20 <= trigger.top;
    const showLeft = tooltip.width < trigger.left;

    const triangleOffset = `calc(${tooltip.height}px - 9.5px)`;
    const triggerCenter = `${(Number(trigger.width) / 2) - 4}px`;

    this.tooltipPosition.top = showTop ? null : `calc(100% + ${offset}px)`;
    this.tooltipPosition.bottom = showTop ? `calc(100% + ${offset}px)` : null;
    this.tooltipPosition.left = showLeft ? null : '0px';
    this.tooltipPosition.right = showLeft ? '0px' : null;

    this.triangleStyle.transform = `rotate(${showTop ? 45 : -135}deg)`;
    this.triangleStyle.top = showTop ? triangleOffset : null;
    this.triangleStyle.bottom = showTop ? null : triangleOffset;
    this.triangleStyle.left = showLeft ? null : triggerCenter;
    this.triangleStyle.right = showLeft ? triggerCenter : null;
  }
}
