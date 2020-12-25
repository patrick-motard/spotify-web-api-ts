import { Http } from '../helpers/Http';
import * as types from '../types';

export class ArtistsApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Get an Artist
   *
   * Get Spotify catalog information for a single artist identified by their
   * unique Spotify ID.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const artist = await spotify.artists.getArtist('4Ge8xMJNwt6EEXOzVXju9a');
   * console.log(artist.name);
   * // "Caroline Polachek"
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   */
  getArtist(artistId: string) {
    return this.http.get<types.Artist>(`/artists/${artistId}`);
  }

  /**
   * ### Get an Artist's Albums
   *
   * Get Spotify catalog information about an artist's albums.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const albums = await spotify.artists.getArtistAlbums('2mHjhKyKCLh6MZELuCe1Es', {
   *   country: ['US'],
   *   include_groups: ['album'],
   * });
   * console.log(albums.items.map(album => album.name));
   * // Array [ "Beware of the Dogs" ]
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   * @param options Optional request information.
   */
  getArtistAlbums(artistId: string, options?: types.GetArtistAlbumsOptions) {
    return this.http.get<types.GetArtistAlbumsResponse>(
      `/artists/${artistId}/albums`,
      options && { params: options },
    );
  }

  /**
   * ### Get Several Artists
   *
   * Get Spotify catalog information for several artists based on their
   * Spotify IDs.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const artists = await spotify.artists.getArtists([
   *   '4iCwCMnqsNZ6atvRiADgtn',
   *   '6ns6XAOsw4B0nDUIovAOUO',
   *   '2yQf6b8hxahZaT5dHlWaB1',
   * ]);
   * console.log(artists.map(artist => artist.name));
   * // Array [ "RZA", "GZA", "Raekwon" ]
   * ```
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  async getArtists(artistIds: string[]) {
    const response = await this.http.get<types.GetArtistsResponse>('/artists', {
      params: {
        ids: artistIds,
      },
    });
    return response.artists;
  }

  /**
   * ### Get an Artist's Top Tracks
   *
   * Get Spotify catalog information about an artist's top tracks by country.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const tracks = await spotify.artists.getArtistTopTracks(
   *   '2h93pZq0e7k5yf4dywlkpM',
   *   'US',
   * );
   * console.log(tracks.map(track => track.name));
   * // Array [ "Chanel", "Nights", "Ivy", ... ]
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   * @param country An ISO 3166-1 alpha-2 country code or the string `from_token`.
   */
  async getArtistTopTracks(artistId: string, country: string) {
    const response = await this.http.get<types.GetArtistTopTracksResponse>(
      `/artists/${artistId}/top-tracks`,
      {
        params: {
          country,
        },
      },
    );
    return response.tracks;
  }

  /**
   * ### Get an Artist's Related Artists
   *
   * Get Spotify catalog information about artists similar to a given artist.
   * Similarity is based on analysis of the Spotify community's listening
   * history.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const artists = await spotify.artists.getRelatedArtists(
   *   '6kBDZFXuLrZgHnvmPu9NsG',
   * );
   * console.log(artists.map(artist => artist.name));
   * // Array [ "AFX", "Squarepusher", "Boards of Canada", ... ]
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   */
  async getRelatedArtists(artistId: string) {
    const response = await this.http.get<types.GetRelatedArtistsResponse>(
      `/artists/${artistId}/related-artists`,
    );
    return response.artists;
  }
}
