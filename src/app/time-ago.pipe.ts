import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(start: Date): any {
    let diff = (new Date()).getTime() - start.getTime();
    let difdt = new Date(diff);
    let year = (Number(difdt.toISOString().slice(0, 4)) - 1970);
    let month = difdt.getMonth();
    let day = difdt.getDate();
    let difference= '';
    if (year) {
      difference = year + "año(s)"
    }
    if (month) {
      difference += ' ' + month + "mese(s)"
    }
    if (day) {
      difference += ' y ' + day + "día(s)"
    }
    return difference;
  }

}
