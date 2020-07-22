import {Component, OnInit} from '@angular/core';
import {Iuser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listuser = 'List User'
  users: Iuser[] = [
    {
      id: 1,
      name: 'Hoang',
      email: 'hoang@gmail.com',
      address: 'HN'
    },
    {
      id: 1,
      name: 'Nam',
      email: 'nam@gmail.com',
      address: 'HN'
    },
    {
      id: 1,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      address: 'HN'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
    this.list_user = this.users
  }

  list_user = [];

  search(event: any) {
    let keyword = event.target.value.toLowerCase();
    this.list_user = keyword ? this.userFilter(keyword) : this.users;

  }

  userFilter(keyword: string) {
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }
}
