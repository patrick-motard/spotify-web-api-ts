import * as types from '../types';
import { BaseApi } from './BaseApi';

export class PersonalizationApi extends BaseApi {
  /**
   * Get the Current User's Top Artists
   *
   * Get the current user's top artists based on calculated affinity.
   *
   * @param options Optional request information.
   */
  getMyTopArtists(options?: types.PersonalizationOptions) {
    return this.http.get<types.GetMyTopArtistsResponse>(
      '/me/top/artists',
      options && { params: options },
    );
  }

  /**
   * Get the Current User's Top Tracks
   *
   * Get the current user's top tracks based on calculated affinity.
   *
   * @param options Optional request information.
   */
  getMyTopTracks(options?: types.PersonalizationOptions) {
    return this.http.get<types.GetMyTopTracksResponse>(
      '/me/top/tracks',
      options && { params: options },
    );
  }
}
