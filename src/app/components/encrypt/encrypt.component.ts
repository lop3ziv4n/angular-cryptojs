import {Component, OnInit} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

  value: string;
  key: string;
  textEncrypt: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  run(): void {
    this.textEncrypt = CryptoJS.AES.encrypt(this.value.trim(), this.key.trim()).toString();
  }

  clear(): void {
    this.textEncrypt = '';
    this.value = '';
    this.key = '';
  }

}
