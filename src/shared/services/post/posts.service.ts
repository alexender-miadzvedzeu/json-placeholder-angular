import { Injectable } from '@angular/core';

@Injectable()
export class PostsService {
  private delay = 1500;
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor() {}
  private sleep() {
    return new Promise((resolve) => setTimeout(resolve, this.delay));
  }

  async getAllPosts() {
    await this.sleep();
    return await fetch(`${this.baseUrl}/posts`);
  }

  async getPostsById(id: string) {
    await this.sleep();
    return await fetch(`${this.baseUrl}/posts/${id}`);
  }
}
