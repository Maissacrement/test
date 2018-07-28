import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor() {

  }
  getData(): [any]{
    return [
      {Ville:'Chatel - Angoulin',alerte:'Attention chient errant',heure:'5'},
      {Ville:'Ile de Ré',alerte:'Accident sur la departementale',heure:'6'},
      {Ville:'Chatel - Angoulin',alerte:'Attention chient errant',heure:'5'},
      {Ville:'Ile de Ré',alerte:'Accident sur la departementale',heure:'6'},
      {Ville:'Chatel - Angoulin',alerte:'Attention chient errant',heure:'5'},
      {Ville:'Ile de Ré',alerte:'Accident sur la departementale',heure:'6'}
    ];
  }

}
