import { ApiHelper } from '../api-helper';

declare global {
    interface Object {
        toQuery(): string;
        toQueryWithUrl(url: string): string;
    }
}

Object.prototype.toQuery = (): string => {
    return ApiHelper.createQuery(this);
};

Object.prototype.toQueryWithUrl = (url): string => {
    return ApiHelper.createUrlQueryWithUrl(url, this);
};

export {};
