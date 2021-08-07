"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebouncerHelper = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class DebouncerHelper {
    constructor() {
        this.prevData = null;
        this.debouncer = new rxjs_1.BehaviorSubject(null);
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
        this.debouncer = new rxjs_1.BehaviorSubject(null);
    }
    debouncerWithValidationAndValueChange(time, value, isDone, callback, validationFunction, valueChangeFunction) {
        const result = new rxjs_1.BehaviorSubject(null);
        this.debouncer
            .pipe(operators_1.map((val) => valueChangeFunction(val)), operators_1.filter((val) => validationFunction(val)), operators_1.debounceTime(time), operators_1.mergeMap((val) => {
            const obs = val === this.prevData ? rxjs_1.of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), operators_1.tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerOnly(time, value, callback) {
        const result = new rxjs_1.BehaviorSubject(null);
        this.debouncer
            .pipe(operators_1.debounceTime(time), operators_1.mergeMap((val) => {
            const obs = val === this.prevData ? rxjs_1.of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), operators_1.tap((val) => {
            this.prevData = val;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerOnlyWithDone(time, value, isDone, callback) {
        const result = new rxjs_1.BehaviorSubject(null);
        this.debouncer
            .pipe(operators_1.debounceTime(time), operators_1.mergeMap((val) => {
            const obs = val === this.prevData ? rxjs_1.of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), operators_1.tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerWithValueChange(time, value, isDone, callback, valueChangeFunction) {
        const result = new rxjs_1.BehaviorSubject(null);
        this.debouncer
            .pipe(operators_1.map((val) => valueChangeFunction(val)), operators_1.debounceTime(time), operators_1.mergeMap((val) => {
            const obs = val === this.prevData ? rxjs_1.of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), operators_1.tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
    debouncerWithValidation(time, value, isDone, callback, validationFunction) {
        const result = new rxjs_1.BehaviorSubject(null);
        this.debouncer
            .pipe(operators_1.filter((val) => validationFunction(val)), operators_1.debounceTime(time), operators_1.mergeMap((val) => {
            const obs = val === this.prevData ? rxjs_1.of(this.prevData) : callback(val);
            this.prevData = val;
            return obs;
        }), operators_1.tap((val) => {
            this.prevData = val;
            isDone = true;
        }))
            .subscribe((val) => result.next(val));
        this.debouncer.next(value);
        return result;
    }
}
exports.DebouncerHelper = DebouncerHelper;
//# sourceMappingURL=debouncer-helper.js.map