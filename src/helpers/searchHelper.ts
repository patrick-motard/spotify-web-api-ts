import { SearchOptions, SearchType } from '../types';
import { Http } from './Http';

export function searchHelper<T>(
  http: Http,
  query: string,
  type: SearchType[],
  options?: SearchOptions,
) {
  return http.get<T>('/search', {
    params: {
      ...options,
      q: query,
      type,
    },
  });
}
