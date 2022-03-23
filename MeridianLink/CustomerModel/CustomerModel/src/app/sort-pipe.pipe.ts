import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './Customer';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(customer: Customer[], column: string):Customer[] {
    if(column=="customerName"){
      customer.sort((e1,e2)=>e1.customerName.localeCompare(e2.customerName))
    }
    else if(column=="dob"){
      customer.sort((e1,e2)=>e1.dob.localeCompare(e2.dob))

    }
    else if(column=="city"){
      customer.sort((e1,e2)=>e1.city.localeCompare(e2.city))
    }
    return customer;
  }

}
