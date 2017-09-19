/**
 * Created by User on 07/18/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {BaseService} from '../shared/services/base.service'; // our translate service

@Pipe({
  name: 'translate',
  pure: false,
})

export class TranslatePipe implements PipeTransform {

  constructor(private baseService: BaseService) {
  }

  transform(value: string, args: any[]): any {
    if (!value) {
      return;
    }
    return this.baseService.translateKey(value);
  }

}
