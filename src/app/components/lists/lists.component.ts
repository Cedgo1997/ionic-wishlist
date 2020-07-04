import { Component, OnInit } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  lists:List[];

  constructor(private wishService: WishesService, private _router: Router) { 

    this.lists = this.wishService.lists;

  }

  selectedList(list:List) {

    this._router.navigateByUrl(`/tabs/tab1/add/${list.id}`);

    console.log(list);
  }


  ngOnInit() {}

}
