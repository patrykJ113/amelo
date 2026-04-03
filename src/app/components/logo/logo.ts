import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'logo',
  imports: [
    RouterLink
  ],
  templateUrl: './logo.html',
  styleUrl: './logo.css'
})
export class Logo {
  @Input() size: 'default' | 'lg' = 'default'
}