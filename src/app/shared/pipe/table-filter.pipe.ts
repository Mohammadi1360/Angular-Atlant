import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tableFilter',
  pure: false
})

export class TableFilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      for (let key in item) {
        if ((typeof item[key] === 'string' || item[key] instanceof String) &&
          item[key].includes(filterString)) {
          resultArray.push(item);
          break;
        }
      }
    }
    return resultArray;
  }

}
