import * as types from '../types';
import { BaseApi } from './BaseApi';

export class ShowsApi extends BaseApi {
  /**
   * Get a Show
   *
   * Get Spotify catalog information for a single show identified by its unique
   * Spotify ID.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  getShow(showId: string, options?: types.MarketOptions) {
    return this.http.get<types.Show>(
      `/shows/${showId}`,
      options && { params: options },
    );
  }

  /**
   * Get a Show's Episodes
   *
   * Get Spotify catalog information about a show's episodes.
   *
   * @param showId The Spotify ID for the show.
   * @param options Optional request information.
   */
  getShowEpisodes(showId: string, options?: types.GetShowEpisodesOptions) {
    return this.http.get<types.GetShowEpisodesResponse>(
      `/shows/${showId}/episodes`,
      options && { params: options },
    );
  }

  /**
   * Get Several Shows
   *
   * Get Spotify catalog information for multiple shows based on their Spotify
   * IDs.
   *
   * @param showIds The Spotify IDs for the shows.
   * @param options Optional request information.
   */
  async getShows(showIds: string[], options?: types.MarketOptions) {
    const response = await this.http.get<types.GetShowsResponse>('/shows', {
      params: {
        ...options,
        ids: showIds,
      },
    });
    return response.shows;
  }
}
