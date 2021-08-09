import { ApiHelper } from '../api-helper';

declare global {
    interface Object {
        toQuery(): string;
    }
}
Object.prototype.toQuery = (): string => {
    return ApiHelper.createQuery(this);
}
export {};
