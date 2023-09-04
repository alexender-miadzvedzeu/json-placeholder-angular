import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/services/user/users.service';
import { User } from '../../shared/types/user/users.types';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService, LoaderComponent],
})
export class UserComponent implements OnInit {
  user: User | null = null;
  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: UsersService
  ) {}

  async ngOnInit() {
    try {
      const { id } = this.route.snapshot.params;
      this.loading = true;
      const response = await this.dataService.getUserById(id);
      const data = await response.json();
      this.user = data;
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }
}
