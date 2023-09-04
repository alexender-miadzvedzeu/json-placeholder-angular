import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoaderComponent } from './loader/loader.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

enum AppRoutes {
  Users = 'users',
  User = 'users/:id',
  Posts = 'posts',
  Post = 'posts/:id',
}

const appRoutes: Route[] = [
  { path: '', redirectTo: AppRoutes.Users, pathMatch: 'full' },
  { path: AppRoutes.Users, component: UsersComponent },
  { path: AppRoutes.User, component: UserComponent },
  { path: AppRoutes.Posts, component: PostsComponent },
  { path: AppRoutes.Post, component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    LoaderComponent,
    PostsComponent,
    PostComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
