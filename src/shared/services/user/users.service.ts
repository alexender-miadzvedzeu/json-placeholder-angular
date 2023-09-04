import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  private delay = 1500;
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor() {}
  private sleep() {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }
  async getUsers() {
    await this.sleep();
    return await fetch(`${this.baseUrl}/users`);
  }
  async getUserById(id: string) {
    await this.sleep();
    return await fetch(`${this.baseUrl}/users/${id}`);
  }
}
