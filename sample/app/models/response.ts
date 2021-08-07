import { Data } from './data';

export class ApiResponse {
    request_hash: string;
    request: string;
    request_cached: string;
    request_cache_expiry: number;
    results: Array<Data>;
}
