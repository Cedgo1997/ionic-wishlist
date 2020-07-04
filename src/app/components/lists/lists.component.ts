import { Component, OnInit, Input } from "@angular/core";
import { WishesService } from "src/app/services/wishes.service";
import { List } from "src/app/models/list.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {

  @Input() completed = true;

  constructor(public wishService: WishesService, private _router: Router) {
  }

  selectedList(list: List) {
    if (this.completed) {
      this._router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this._router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

    console.log(list);
  }


  deleteList(list:List) {
    this.wishService.deleteList(list);
  }

  ngOnInit() {}
}
