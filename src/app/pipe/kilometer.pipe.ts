import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometer'
})
export class KilometerPipe implements PipeTransform {

  transform(value: any, targetunits:string): unknown {

    if (!value) { 
      return '';   
    }
    switch(targetunits) { 
      case 'km':
        return value*1.60934; 
      case 'm':
        return value*1.60934 *1000;
      case 'cm':
        return value*1.60934*1000*1000

      default :
      throw new Error("target is not Supported by the app ") ;
    }




    
  }

}
