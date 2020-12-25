import { Http } from '../helpers/Http';
import * as types from '../types';

export class FollowApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * ### Check if Users Follow a Playlist
   *
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * **Required Scopes:** `playlist-read-private` when checking if the current
   * user is privately following a playlist.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.areFollowingPlaylist(
   *   '7fdQkum2nvXwcaCKnBZ7rR',
   *   ['griegs', 'jmperezperez'],
   * );
   * console.log(response);
   * // Array [ true, false ]
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userIds The Spotify IDs of the users.
   */
  areFollowingPlaylist(playlistId: string, userIds: string[]) {
    return this.http.get<boolean[]>(
      `/playlists/${playlistId}/followers/contains`,
      {
        params: {
          ids: userIds,
        },
      },
    );
  }

  /**
   * ### Follow Artist
   *
   * Add the current user as a follower of an artist.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followArtist('029y4wr8YYFoqPBahe8Ddz');
   * ```
   *
   * @param artistId The Spotify ID of the artist.
   */
  followArtist(artistId: string) {
    return this.followArtists([artistId]);
  }

  /**
   * ### Follow Artists
   *
   * Add the current user as a follower of one or more artists.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followArtists([
   *   '029y4wr8YYFoqPBahe8Ddz',
   *   '1SlPJ2l80sMnCHpz1wB8nT',
   * ]);
   * ```
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  followArtists(artistIds: string[]) {
    return this.http.put<void>('/me/following', {
      params: {
        type: 'artist',
      },
      data: {
        ids: artistIds,
      },
    });
  }

  /**
   * ### Follow a Playlist
   *
   * Add the current user as a follower of a playlist.
   *
   * **Required Scopes:** `playlist-modify-public` when publicly following a
   * playlist. `playlist-modify-private` when privately following a playlist.
   *
   * @example
   * ```ts
   * await spotify.follow.followPlaylist('0USISVmfwjRpmY980WkNW4');
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param options Optional request information.
   */
  followPlaylist(playlistId: string, options?: types.FollowPlaylistOptions) {
    return this.http.put<void>(
      `/playlists/${playlistId}/followers`,
      options && { data: options },
    );
  }

  /**
   * ### Follow User
   *
   * Add the current user as a follower of a Spotify user.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followUser('griegs');
   * ```
   *
   * @param userId The Spotify ID of the user.
   */
  followUser(userId: string) {
    return this.followUsers([userId]);
  }

  /**
   * ### Follow Users
   *
   * Add the current user as a follower of one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.followUsers(['griegs', 'jmperezperez']);
   * ```
   *
   * @param userIds The Spotify IDs of the users.
   */
  followUsers(userIds: string[]) {
    return this.http.put<void>('/me/following', {
      params: {
        type: 'user',
      },
      data: {
        ids: userIds,
      },
    });
  }

  /**
   * ### Get User's Followed Artists
   *
   * Get the current user's followed artists.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const artists = await spotify.follow.getFollowedArtists();
   * console.log(artists.items.map(item => item.name));
   * // Array [ "Common Market", "Teebs", "Mount Kimbie", ... ]
   * ```
   *
   * @param options Optional request information.
   */
  async getFollowedArtists(options?: types.GetFollowedArtistsOptions) {
    const response = await this.http.get<types.GetFollowedArtistsResponse>(
      '/me/following',
      {
        params: {
          ...options,
          type: 'artist',
        },
      },
    );
    return response.artists;
  }

  /**
   * ### Check if Current User Follows Artist
   *
   * Check to see if the current user is following an artist.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingArtist(
   *   '7rZjYMRC5pTV089WKn1Y4s',
   * );
   * console.log(response);
   * // true
   * ```
   *
   * @param artistId The Spotify ID for the artist.
   */
  async isFollowingArtist(artistId: string) {
    const response = await this.isFollowingArtists([artistId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows Artists
   *
   * Check to see if the current user is following one or more artists.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingArtists([
   *   '2leze82lbuNUn3K4c7nS1B',
   *   '77bG3jpmWXOxpmZcVjPayy',
   * ]);
   * console.log(response);
   * // Array [ true, false ]
   * ```
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  isFollowingArtists(artistIds: string[]) {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: artistIds,
        type: 'artist',
      },
    });
  }

  /**
   * ### Check if User Follows a Playlist
   *
   * Check to see if a Spotify user is following a specified playlist.
   *
   * **Required Scopes:** `playlist-read-private` when checking if the current
   * user is privately following a playlist.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingPlaylist(
   *   '4xOF7TTAG2McFFJDixc3Lt',
   *   'griegs',
   * );
   * console.log(response);
   * // true
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userId The Spotify ID of the user.
   */
  async isFollowingPlaylist(playlistId: string, userId: string) {
    const response = await this.areFollowingPlaylist(playlistId, [userId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows User
   *
   * Check to see if the current user is following a Spotify user.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingUser('griegs');
   * console.log(response);
   * // true
   * ```
   *
   * @param userId The Spotify ID for the user.
   */
  async isFollowingUser(userId: string) {
    const response = await this.isFollowingUsers([userId]);
    return response[0];
  }

  /**
   * ### Check if Current User Follows Users
   *
   * Check to see if the current user is following one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-read`.
   *
   * @example
   * ```ts
   * const response = await spotify.follow.isFollowingUsers([
   *   'griegs',
   *   'jmperezperez',
   * ]);
   * console.log(response);
   * // Array [ true, true ]
   * ```
   *
   * @param userIds The Spotify IDs for the users.
   */
  isFollowingUsers(userIds: string[]) {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: userIds,
        type: 'user',
      },
    });
  }

  /**
   * ### Unfollow Artist
   *
   * Remove the current user as a follower of an artist.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowArtist('3bU97PoqnxjKD45CrfwmC9');
   * ```
   *
   * @param artistId The Spotify ID of the artist.
   */
  unfollowArtist(artistId: string) {
    return this.unfollowArtists([artistId]);
  }

  /**
   * ### Unfollow Artists
   *
   * Remove the current user as a follower of one or more artists.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  unfollowArtists(artistIds: string[]) {
    return this.http.delete<void>('/me/following', {
      params: {
        type: 'artist',
      },
      data: {
        ids: artistIds,
      },
    });
  }

  /**
   * ### Unfollow a Playlist
   *
   * Remove the current user as a follower of a playlist.
   *
   * **Required Scopes:** `playlist-modify-public` when unfollowing a publicly
   * followed playlist. `playlist-modify-private` when unfollowing a privately
   * followed playlist.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowPlaylist('6SAtV2bMjUbQTV37X51F3u');
   * ```
   *
   * @param playlistId The Spotify ID of the playlist.
   */
  unfollowPlaylist(playlistId: string) {
    return this.http.delete<void>(`/playlists/${playlistId}/followers`);
  }

  /**
   * ### Unfollow User
   *
   * Remove the current user as a follower of a Spotify user.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowUser('griegs');
   * ```
   *
   * @param userId The Spotify ID of the user.
   */
  unfollowUser(userId: string) {
    return this.unfollowUsers([userId]);
  }

  /**
   * ### Unfollow Users
   *
   * Remove the current user as a follower of one or more Spotify users.
   *
   * **Required Scopes:** `user-follow-modify`.
   *
   * @example
   * ```ts
   * await spotify.follow.unfollowUsers(['griegs', 'jmperezperez']);
   * ```
   *
   * @param userIds The Spotify IDs of the users.
   */
  unfollowUsers(userIds: string[]) {
    return this.http.delete<void>('/me/following', {
      params: {
        type: 'user',
      },
      data: {
        ids: userIds,
      },
    });
  }
}
