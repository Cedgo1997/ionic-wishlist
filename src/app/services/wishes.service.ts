import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() { 

    const list1 = new List('Collect Infinity Stones');
    const list2 = new List('Heroes to dissapear');

    this.lists.push(list1, list2);

  }

  addList(title:string) {

    const newList = new List(title);
    this.lists.push(newList);
  }
}
