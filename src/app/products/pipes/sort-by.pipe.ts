import { Pipe, PipeTransform } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    if (!sortBy) {
      return heroes;
    }

    const sortedHeroes = heroes.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });

    return sortedHeroes;
  }

}
