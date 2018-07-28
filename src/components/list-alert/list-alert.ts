import { Component } from '@angular/core';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'list-alert',
  templateUrl: 'list-alert.html'
})
export class ListAlertComponent {

  public list: [any];


  constructor(data: DataProvider) {
      this.list = data.getData();
      console.log(this.list)
  }

}
