import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:{title:string}[],Search:string): {title:string}[] | null {
    if(!items || !Search){
      return items;
    }
    else{
      Search=Search.toLowerCase();
      return items.filter((item)=> item.title.toLowerCase().includes(Search))
    }
  }

}
