import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/types/post/posts.types';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../shared/services/post/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService],
})
export class PostComponent implements OnInit {
  post: Post | null = null;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: PostsService
  ) {}

  async ngOnInit() {
    try {
      const { id } = this.route.snapshot.params;
      this.loading = true;
      const response = await this.dataService.getPostsById(id);
      const data = await response.json(); 
      this.post = data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }
}
