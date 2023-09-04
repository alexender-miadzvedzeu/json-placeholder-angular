import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/types/user/users.types';
import { UsersService } from '../../shared/services/user/users.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService, LoaderComponent],
})
export class UsersComponent implements OnInit {
  loading: boolean = false;
  users: User[] = [];
  constructor(private dataService: UsersService) {}

  async ngOnInit() {
    try {
      this.loading = true;
      const response = await this.dataService.getUsers();
      const data = await response.json();
      this.users = data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }
}
