import * as types from '../types';
import { BaseApi } from './BaseApi';

export class UsersApi extends BaseApi {
  /**
   * Get Current User's Profile
   *
   * Get detailed profile information about the current user (including the
   * current user's username).
   */
  getMe() {
    return this.http.get<types.PrivateUser>('/me');
  }

  /**
   * Get a User's Profile
   *
   * Get public profile information about a Spotify user.
   *
   * @param userId The user's Spotify user ID.
   */
  getUser(userId: string) {
    return this.http.get<types.PublicUser>(`/users/${userId}`);
  }
}
