import { Component } from '@angular/core';
import {OauthButton} from '@components/oauth-button/oauth-button';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';

@Component({
  selector: 'oauth-button-group',
  imports: [
    OauthButton,
    HorizontalSpacing
  ],
  templateUrl: './oauth-button-group.html',
  styleUrl: './oauth-button-group.css'
})
export class OauthButtonGroup {

}
