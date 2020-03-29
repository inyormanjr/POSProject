import { Injectable } from '@angular/core';
import { User, MockData } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockData: User[] = new MockData().fetchData();
  constructor() { }
}
