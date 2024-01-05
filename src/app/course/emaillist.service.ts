import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmaillistService {
  get getEmailList() {
    return ['a@gmail.com', 'b@gmail.com', 'c@gmail.com'];
  }
  constructor() {}
}
