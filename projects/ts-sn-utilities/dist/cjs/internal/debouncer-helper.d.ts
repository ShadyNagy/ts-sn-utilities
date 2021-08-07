import { Observable, BehaviorSubject } from 'rxjs';
export declare class DebouncerHelper {
    prevData: any;
    debouncer: BehaviorSubject<any>;
    constructor();
    static isStringValid(value: string, minLength: number): boolean;
    static isObjectValid(object: {}): boolean;
    resetData(): void;
    debouncerWithValidationAndValueChange<TReq, TRes>(time: number, value: TReq, isDone: boolean, callback: (request: TReq) => Observable<TRes>, validationFunction: (value: TReq) => boolean, valueChangeFunction: (value: TReq) => TReq): Observable<TRes>;
    debouncerOnly<TReq, TRes>(time: number, value: TReq, callback: (request: TReq) => Observable<TRes>): Observable<TRes>;
    debouncerOnlyWithDone<TReq, TRes>(time: number, value: TReq, isDone: boolean, callback: (request: TReq) => Observable<TRes>): Observable<TRes>;
    debouncerWithValueChange<TReq, TRes>(time: number, value: TReq, isDone: boolean, callback: (request: TReq) => Observable<TRes>, valueChangeFunction: (value: TReq) => TReq): Observable<TRes>;
    debouncerWithValidation<TReq, TRes>(time: number, value: TReq, isDone: boolean, callback: (request: TReq) => Observable<TRes>, validationFunction: (value: TReq) => boolean): Observable<TRes>;
}
