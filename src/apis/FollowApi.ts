import { Http } from '../helpers/Http';
import { Artist, CursorBasedPaging } from '../types/SpotifyObjects';
import {
  FollowPlaylistOptions,
  GetFollowedArtistsOptions,
} from '../types/SpotifyOptions';
import { GetFollowedArtistsResponse } from '../types/SpotifyResponses';

export class FollowApi {
  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  /**
   * Check if Users Follow a Playlist
   *
   * Check to see if one or more Spotify users are following a specified playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param userIds The Spotify IDs of the users.
   */
  areFollowingPlaylist(
    playlistId: string,
    userIds: string[],
  ): Promise<boolean[]> {
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
   * Follow Artists
   *
   * Add the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  followArtists(artistIds: string[]): Promise<void> {
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
   * Follow a Playlist
   *
   * Add the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   * @param options Optional request information.
   */
  followPlaylist(
    playlistId: string,
    options?: FollowPlaylistOptions,
  ): Promise<void> {
    return this.http.put<void>(
      `/playlists/${playlistId}/followers`,
      options && { data: options },
    );
  }

  /**
   * Follow User
   *
   * Add the current user as a follower of a Spotify user.
   *
   * @param userId The Spotify ID of the user.
   */
  followUser(userId: string): Promise<void> {
    return this.followUsers([userId]);
  }

  /**
   * Follow Users
   *
   * Add the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  followUsers(userIds: string[]): Promise<void> {
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
   * Get User's Followed Artists
   *
   * Get the current user's followed artists.
   *
   * @param options Optional request information.
   */
  async getFollowedArtists(
    options?: GetFollowedArtistsOptions,
  ): Promise<CursorBasedPaging<Artist>> {
    const response = await this.http.get<GetFollowedArtistsResponse>(
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
   * Check if Current User Follows Artist
   *
   * Check to see if the current user is following an artist.
   *
   * @param artistId The Spotify ID for the artist.
   */
  async isFollowingArtist(artistId: string): Promise<boolean> {
    const response = await this.isFollowingArtists([artistId]);
    return response[0];
  }

  /**
   * Check if Current User Follows Artists
   *
   * Check to see if the current user is following one or more artists.
   *
   * @param artistIds The Spotify IDs for the artists.
   */
  isFollowingArtists(artistIds: string[]): Promise<boolean[]> {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: artistIds,
        type: 'artist',
      },
    });
  }

  /**
   * Check if Current User Follows Users
   *
   * Check to see if the current user is following one or more Spotify users.
   *
   * @param userIds The Spotify IDs for the users.
   */
  isFollowingUsers(userIds: string[]): Promise<boolean[]> {
    return this.http.get<boolean[]>('/me/following/contains', {
      params: {
        ids: userIds,
        type: 'user',
      },
    });
  }

  /**
   * Unfollow Artists
   *
   * Remove the current user as a follower of one or more artists.
   *
   * @param artistIds The Spotify IDs of the artists.
   */
  unfollowArtists(artistIds: string[]): Promise<void> {
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
   * Unfollow a Playlist
   *
   * Remove the current user as a follower of a playlist.
   *
   * @param playlistId The Spotify ID of the playlist.
   */
  unfollowPlaylist(playlistId: string): Promise<void> {
    return this.http.delete<void>(`/playlists/${playlistId}/followers`);
  }

  /**
   * Unfollow Users
   *
   * Remove the current user as a follower of one or more Spotify users.
   *
   * @param userIds The Spotify IDs of the users.
   */
  unfollowUsers(userIds: string[]): Promise<void> {
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