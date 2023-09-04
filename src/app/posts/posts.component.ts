import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/post/posts.service';
import { LoaderComponent } from '../loader/loader.component';
import { Post } from './posts.types';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService, LoaderComponent],
})
export class PostsComponent implements OnInit {
  loading: boolean = false;
  posts: Post[] = [];
  constructor(private dataService: PostsService) {}
  async ngOnInit() {
    try {
      this.loading = true;
      const response = await this.dataService.getAllPosts();
      const data = await response.json();
      this.posts = data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }
}
