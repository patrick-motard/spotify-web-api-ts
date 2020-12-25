import { Http } from '../helpers/Http';
import * as types from '../types';

export class EpisodesApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Get an Episode
   *
   * Get Spotify catalog information for a single episode identified by its
   * unique Spotify ID.
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   * @example
   * ```ts
   * const episode = await spotify.episodes.getEpisode('5VhaAEtTrKQ1NSneHsXK6C');
   * console.log(episode.name);
   * // "S1E6 - Institutionalized by Kendrick Lamar"
   * ```
   *
   * @param options Optional request information.
   */
  getEpisode(episodeId: string, options?: types.MarketOptions) {
    return this.http.get<types.Episode>(
      `/episodes/${episodeId}`,
      options && { params: options },
    );
  }

  /**
   * ### Get Several Episodes
   *
   * Get Spotify catalog information for multiple episodes based on their
   * Spotify IDs.
   *
   * **Required Scopes:** `user-read-playback-position` for reading the user's
   * resume points.
   *
   * @example
   * ```ts
   * const episodes = await spotify.episodes.getEpisodes([
   *  '3Ht9rzglNNgJBFGp2RL7o2',
   *  '7r40piSdCht1NL720dKNWf',
   * ]);
   * console.log(episodes.map(episode => episode.name));
   * // Array [ "The Soul Train Episode", "How the Voyager Golden Records Work" ]
   * ```
   *
   * @param episodeIds A list of the Spotify IDs for the episodes.
   * @param options Optional request information.
   */
  async getEpisodes(episodeIds: string[], options?: types.MarketOptions) {
    const response = await this.http.get<types.GetEpisodesResponse>(
      '/episodes',
      {
        params: {
          ...options,
          ids: episodeIds,
        },
      },
    );
    return response.episodes;
  }
}
