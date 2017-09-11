/**
 * Created by User on 07/18/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../translate/translate.service'; // our translate service

@Pipe({
  name: 'translate',
  pure: false,
})

export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) { }

  transform(value: string, args: any[]): any {
    if (!value) return;
    return this.translate.instant(value);
  }

}