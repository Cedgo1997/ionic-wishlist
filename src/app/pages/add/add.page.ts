import { Component, OnInit } from "@angular/core";
import { WishesService } from "src/app/services/wishes.service";
import { ActivatedRoute } from "@angular/router";
import { List } from "src/app/models/list.model";
import { ItemList } from 'src/app/models/list-item.model';

@Component({
  selector: "app-add",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage implements OnInit {
  list: List;
  itemName = "";

  constructor(
    private wishService: WishesService,
    private _route: ActivatedRoute
  ) {
    const listId = this._route.snapshot.paramMap.get("listId");

    this.list = this.wishService.getList(listId);
    console.log(listId);
  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';
    this.wishService.saveStorage();
  }
}
