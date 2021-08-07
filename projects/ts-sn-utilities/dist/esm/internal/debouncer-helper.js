import { BehaviorSubject, of } from 'rxjs';
import { debounceTime, filter, map, mergeMap, tap } from 'rxjs/operators';
export class DebouncerHelper {
    constructor() {
        this.prevData = null;
        this.debouncer = new BehaviorSubject(null);
    }
    static isStringValid(value, minLength) {
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
    static isObjectValid(object) {
        return object !== null && object !== undefined;
    }
    resetData() {
        this.prevData = null;
        this.debouncer = new BehaviorSubject(null);
    }
    debouncerWithValidationAndValueChange(time, value, isDone, callback, validationFunction, valueChangeFunction) {
        const result = new BehaviorSubject(null);
        this.debouncer
            .pipe(map((val) => valueChangeFunction(val)), filter((val) => validationFunction(val)), debounceTime(time), mergeMap((val) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerOnly(time, value, callback) {
        const result = new BehaviorSubject(null);
        this.debouncer
            .pipe(debounceTime(time), mergeMap((val) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), tap((val) => {
            this.prevData = val;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerOnlyWithDone(time, value, isDone, callback) {
        const result = new BehaviorSubject(null);
        this.debouncer
            .pipe(debounceTime(time), mergeMap((val) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerWithValueChange(time, value, isDone, callback, valueChangeFunction) {
        const result = new BehaviorSubject(null);
        this.debouncer
            .pipe(map((val) => valueChangeFunction(val)), debounceTime(time), mergeMap((val) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerWithValidation(time, value, isDone, callback, validationFunction) {
        const result = new BehaviorSubject(null);
        this.debouncer
            .pipe(filter((val) => validationFunction(val)), debounceTime(time), mergeMap((val) => {
            const obs = val === this.prevData ? of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
}
//# sourceMappingURL=debouncer-helper.js.map