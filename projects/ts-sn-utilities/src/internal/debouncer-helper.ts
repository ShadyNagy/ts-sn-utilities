import { Observable, BehaviorSubject, of} from 'rxjs';
import { debounceTime, filter, map, mergeMap, tap } from 'rxjs/operators';


export class DebouncerHelper {

  prevData: any = null;
  debouncer:BehaviorSubject<any>  = new BehaviorSubject(null);

  constructor() {}

  static isStringValid(value: string, minLength: number): boolean {
    if (!value || value === undefined) {
      return false;
    }
    if (value.length < minLength) {
      return false;
    }
    if (value.trim().length === 0) {
      return false;
    }

    return true;
  }

  static isObjectValid(object: {}): boolean {
    return object !== null && object !== undefined;
  }

  resetData(): void {
    this.prevData = null;
    this.debouncer = new BehaviorSubject(null);
  }

  debouncerWithValidationAndValueChange<TReq, TRes>(time: number, value: TReq, isDone: boolean,
                                                    callback: (request: TReq) => Observable<TRes>,
                                                    validationFunction: (value: TReq) => boolean,
                                                    valueChangeFunction: (value: TReq) => TReq): Observable<TRes>  {

    const result = new BehaviorSubject<any>(null);

    this.debouncer
      .pipe(
          map((val: TReq) => valueChangeFunction(val)),
          filter((val: TReq) => validationFunction(val)),
          debounceTime(time),
          mergeMap((val: TReq) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
          }),
          tap((val: TReq) => {
            this.prevData = val;
            isDone = true;
          })
      )
      .subscribe((val: TReq) => result.next(val));

    this.debouncer.next(value);

    return result;
  }

  debouncerOnly<TReq, TRes>(time: number, value: TReq,
                            callback: (request: TReq) => Observable<TRes>): Observable<TRes>  {

    const result = new BehaviorSubject<any>(null);

    this.debouncer
      .pipe(
          debounceTime(time),
          mergeMap((val: TReq) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
          }),
          tap((val: TReq) => {
            this.prevData = val;
          })
      )
      .subscribe((val: TReq) => result.next(val));

    this.debouncer.next(value);

    return result;
  }

  debouncerOnlyWithDone<TReq, TRes>(time: number, value: TReq, isDone: boolean,
                                    callback: (request: TReq) => Observable<TRes>): Observable<TRes>  {

    const result = new BehaviorSubject<any>(null);

    this.debouncer
      .pipe(
          debounceTime(time),
          mergeMap((val: TReq) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
          }),
          tap((val: TReq) => {
            this.prevData = val;
            isDone = true;
          })
      )
      .subscribe((val: TReq) => result.next(val));

    this.debouncer.next(value);

    return result;
  }

  debouncerWithValueChange<TReq, TRes>(time: number, value: TReq, isDone: boolean,
                                       callback: (request: TReq) => Observable<TRes>,
                                       valueChangeFunction: (value: TReq) => TReq): Observable<TRes>  {

    const result = new BehaviorSubject<any>(null);

    this.debouncer
      .pipe(
          map((val: TReq) => valueChangeFunction(val)),
          debounceTime(time),
          mergeMap((val: TReq) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
          }),
          tap((val: TReq) => {
            this.prevData = val;
            isDone = true;
          })
      )
      .subscribe((val: TReq) => result.next(val));

    this.debouncer.next(value);

    return result;
  }

  debouncerWithValidation<TReq, TRes>(time: number, value: TReq, isDone: boolean,
                                      callback: (request: TReq) => Observable<TRes>,
                                      validationFunction: (value: TReq) => boolean): Observable<TRes>  {

    const result = new BehaviorSubject<any>(null);

    this.debouncer
      .pipe(
          filter((val: TReq) => validationFunction(val)),
          debounceTime(time),
          mergeMap((val: TReq) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
          }),
          tap((val: TReq) => {
            this.prevData = val;
            isDone = true;
          })
      )
      .subscribe((val: TReq) => result.next(val));

    this.debouncer.next(value);

    return result;
  }
}
