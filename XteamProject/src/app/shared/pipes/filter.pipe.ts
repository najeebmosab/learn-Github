import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:any[],searchVal:any) {
    return searchVal? arr.filter(el => el.Id == searchVal || el.productName?.toLowerCase().startsWith(searchVal.toLowerCase())) : arr;//el.Id == searchVal
  }

}
