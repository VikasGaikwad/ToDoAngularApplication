import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  static filter(items: Array<{ [key: string]: any }>,
    searchText: string): Array<{ [key: string]: any }>   {

  const toCompare = searchText.toLowerCase();

  return items.filter(function (item: any) {
  for (const property in item) {
  if (item[property] === null) {
  continue;
  }
  if (item[property].toString().toLowerCase().includes(toCompare)) {
  return true;
  }
  }
  return false;
  });
  }
transform(items: any, searchText: string): any {
if (!searchText || !items) {
  return items;
}

return SearchFilterPipe.filter(items, searchText);
}





}
