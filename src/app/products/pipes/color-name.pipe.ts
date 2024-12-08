import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

type nombreColor = keyof typeof Color;

@Pipe({
  name: 'colorName'
})

export class ColorNamePipe implements PipeTransform {

  transform(numValue: Color): nombreColor {
    return Color[numValue] as nombreColor;
  }

}
