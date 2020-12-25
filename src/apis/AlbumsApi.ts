import * as types from '../types';
import { BaseApi } from './BaseApi';

export class AlbumsApi extends BaseApi {
  /**
   * ### Get an Album
   *
   * Get Spotify catalog information for a single album.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const album = await spotify.albums.getAlbum('53VKICyqCf91sVkTdFrzKX');
   * console.log(album.name);
   * // "Titanic Rising"
   * ```
   *
   * @param albumId The Spotify ID for the album.
   * @param options Optional request information.
   */
  getAlbum(albumId: string, options?: types.MarketOptions) {
    return this.http.get<types.Album>(
      `/albums/${albumId}`,
      options && { params: options },
    );
  }

  /**
   * ### Get Several Albums
   *
   * Get Spotify catalog information for multiple albums identified by their
   * Spotify IDs.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const albums = await spotify.albums.getAlbums([
   *   '0FO3N0KhhvXY7SORYneGbw',
   *   '3FND6DpDA79Fox7bv8LvRC',
   * ]);
   * console.log(albums.map(album => album.name));
   * // Array [ "What's There", "Heat Division" ]
   * ```
   *
   * @param albumIds The Spotify IDs for the albums.
   * @param options Optional request information.
   */
  async getAlbums(albumIds: string[], options?: types.MarketOptions) {
    const response = await this.http.get<types.GetAlbumsResponse>('/albums', {
      params: {
        ...options,
        ids: albumIds,
      },
    });
    return response.albums;
  }

  /**
   * ### Get an Album's Tracks
   *
   * Get Spotify catalog information about an album's tracks.
   *
   * **Required Scopes:** None.
   *
   * @example
   * ```ts
   * const tracks = await spotify.albums.getAlbumTracks('76254F4WYdKOm0pVAVvp0x');
   * console.log(tracks.items.map(track => track.name));
   * // Array [ "4D", "MTI" ]
   * ```
   *
   * @param albumId The Spotify ID for the album.
   * @param options Optional request information.
   */
  getAlbumTracks(albumId: string, options?: types.GetAlbumTracksOptions) {
    return this.http.get<types.GetAlbumTracksResponse>(
      `/albums/${albumId}/tracks`,
      options && { params: options },
    );
  }
}
