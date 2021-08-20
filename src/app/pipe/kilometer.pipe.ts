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



      // targetunits.forEach(elements  => {
        
      //     console.log(elements);
          

      //   if(elements==='km'){
      //       return value*1.60934; 
      //     }
      //   else if (elements ==='m') { 
      //       return  value*1.60934*1000; 
      //     }
      //   else if  (elements==='cm') { 
      //       return value*1.60934*1000*1000
      //    }
      //   else  { 
      //       throw new Error("The type is not Supported  please contact nanna For this "); 
      //     }
      // });

    // console.log(args);
    
  }

}
