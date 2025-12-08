import { Component } from '@angular/core';
import {Spinner} from '@components/spinner/spinner';

@Component({
  selector: 'loading',
  imports: [
    Spinner
  ],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading {

}
