import { Component } from "@angular/core";
import { WishesService } from "src/app/services/wishes.service";
import { List } from "src/app/models/list.model";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  lists: List[];

  constructor(
    public wishesService: WishesService,
    private _router: Router,
    private alertCtlr: AlertController
  ) {
    this.lists = this.wishesService.lists;
  }

  async addList() {
    const alert = await this.alertCtlr.create({
      header: "New List",
      inputs: [{
        name:'title',
        type:'text',
        placeholder:'List Name'

      }],
      buttons: [
        {
          text:'Cancel',
          role:'cancel',
          handler:() => {
            console.log('Cancel');
          }
        },
        {
          text:'Create',
          handler: (data) => {
            if (data.title.length === 0) {
              return;
            } 
            // id of the list
            const listId = this.wishesService.addList(data.title);
            // Now navigate to id add item list page
            this._router.navigateByUrl(`/tabs/tab1/add/${ listId }`);

          }
        }
      ],
    });

    alert.present();
  }

  /* selectedList(list:List) {

    this._router.navigateByUrl(`/tabs/tab1/add/${list.id}`);

    console.log(list);
  } */

}
