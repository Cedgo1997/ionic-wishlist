import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { WishesService } from "src/app/services/wishes.service";
import { List } from "src/app/models/list.model";
import { Router } from "@angular/router";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"],
})
export class ListsComponent implements OnInit {
  @Input() completed = true;



  @ViewChild(IonList) list:IonList;


  constructor(
    public wishesService: WishesService,
    private _router: Router,
    private alertCtlr: AlertController
  ) {}

  selectedList(list: List) {
    if (this.completed) {
      this._router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
    } else {
      this._router.navigateByUrl(`/tabs/tab1/add/${list.id}`);
    }

    console.log(list);
  }

  deleteList(list: List) {
    this.wishesService.deleteList(list);
  }

  async editList(list: List) {

    const alert = await this.alertCtlr.create({
      header: "Edit List",
      inputs: [
        {
          name: "title",
          value: list.title,
          type: "text",
          placeholder: "List Name",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel");
            this.list.closeSlidingItems();
          },
        },
        {
          text: "Update",
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }
            // Change title
            list.title = data.title;
            this.wishesService.saveStorage();
            this.list.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();

  }

  ngOnInit() {}

}
