import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {

      console.log({ email });

      if(email == 'john.doe@mail.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
      }

      subscriber.next(null);
      subscriber.complete();

    });

    return httpCallObservable;
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value;

  //   console.log({ email })

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }

  // return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
  //   .pipe(
  //     map(resp => {
  //       return (resp.length === 0) ? null : {emailTaken: true}
  //     })
  //   );

}
