import {Component, OnInit} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.scss']
})
export class DecryptComponent implements OnInit {

  value: string;
  key: string;
  textDecrypt: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    this.textDecrypt = CryptoJS.AES.decrypt(this.value.trim(), this.key.trim()).toString(CryptoJS.enc.Utf8);
  }

  clear(): void {
    this.textDecrypt = '';
    this.value = '';
    this.key = '';
  }

}
