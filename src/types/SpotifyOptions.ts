// +---------+
// | General |
// +---------+

export interface DeviceIdOptions {
  device_id?: string;
}

export interface MarketOptions {
  market?: string;
}

// +--------+
// | Albums |
// +--------+

export interface GetAlbumTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

// +---------+
// | Artists |
// +---------+

export interface GetArtistAlbumsOptions {
  include_groups?: Array<'album' | 'single' | 'appears_on' | 'compilation'>;
  country?: string;
  limit?: number;
  offset?: number;
}

// +--------+
// | Browse |
// +--------+

export interface GetCategoriesOptions {
  country?: string;
  locale?: string;
  limit?: number;
  offset?: number;
}

export interface GetCategoryOptions {
  country?: string;
  locale?: string;
}

export interface GetCategoryPlaylistsOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetFeaturedPlaylistsOptions {
  locale?: string;
  country?: string;
  timestamp?: string;
  limit?: number;
  offset?: number;
}

export interface GetNewReleasesOptions {
  country?: string;
  limit?: number;
  offset?: number;
}

export interface GetRecommendationsOptions {
  limit?: number;
  market?: string;
  max_acousticness?: number;
  max_danceability?: number;
  max_duration_ms?: number;
  max_energy?: number;
  max_instrumentalness?: number;
  max_key?: number;
  max_liveness?: number;
  max_loudness?: number;
  max_mode?: number;
  max_popularity?: number;
  max_speechiness?: number;
  max_tempo?: number;
  max_time_signature?: number;
  max_valence?: number;
  min_acousticness?: number;
  min_danceability?: number;
  min_duration_ms?: number;
  min_energy?: number;
  min_instrumentalness?: number;
  min_key?: number;
  min_liveness?: number;
  min_loudness?: number;
  min_mode?: number;
  min_popularity?: number;
  min_speechiness?: number;
  min_tempo?: number;
  min_time_signature?: number;
  min_valence?: number;
  target_acousticness?: number;
  target_danceability?: number;
  target_duration_ms?: number;
  target_energy?: number;
  target_instrumentalness?: number;
  target_key?: number;
  target_liveness?: number;
  target_loudness?: number;
  target_mode?: number;
  target_popularity?: number;
  target_speechiness?: number;
  target_tempo?: number;
  target_time_signature?: number;
  target_valence?: number;
}

// +--------+
// | Follow |
// +--------+

export interface FollowPlaylistOptions {
  public?: boolean;
}

export interface GetFollowedArtistsOptions {
  limit?: number;
  after?: string;
}

// +---------+
// | Library |
// +---------+

export interface GetSavedAlbumsOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface GetSavedShowsOptions {
  limit?: number;
  offset?: number;
}

export interface GetSavedTracksOptions {
  limit?: number;
  offset?: number;
  market?: string;
}

export interface RemoveSavedShowsOptions {
  market?: string;
}

// +-----------------+
// | Personalization |
// +-----------------+

export interface PersonalizationOptions {
  limit?: number;
  offset?: number;
  time_range?: 'long_term' | 'medium_term' | 'short_term';
}

// +--------+
// | Player |
// +--------+

export interface GetCurrentlyPlayingTrackOptions {
  market?: string;
  additional_types?: Array<'episode'>;
}

export interface GetPlaybackInfoOptions {
  market?: string;
  additional_types?: Array<'episode'>;
}

export interface GetRecentlyPlayedTracksOptions {
  limit?: number;
  after?: number;
  before?: number;
}

export interface PlayOptions {
  device_id?: string;
  context_uri?: string;
  uris?: string[];
  offset?: { position: number } | { uri: string };
}

export interface TransferPlaybackOptions {
  play?: boolean;
}

// +-----------+
// | Playlists |
// +-----------+

export interface AddItemsToPlaylistOptions {
  position?: number;
}

export interface CreatePlaylistOptions {
  public?: boolean;
  collaborative?: boolean;
  description?: string;
}

export interface GetMyPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface GetPlaylistOptions {
  fields?: string;
  market?: string;
  additional_types?: Array<'episode'>;
}

export interface GetPlaylistItemsOptions {
  fields?: string;
  limit?: number;
  offset?: number;
  market?: string;
  additional_types?: Array<'episode'>;
}

export interface GetUserPlaylistsOptions {
  limit?: number;
  offset?: number;
}

export interface RemovePlaylistItemsByPositionOptions {
  snapshot_id?: string;
}

export interface ReorderPlaylistItemsOptions {
  range_length?: number;
  snapshot_id?: string;
}

// +--------+
// | Search |
// +--------+

export interface SearchOptions {
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: 'audio';
}

// +-------+
// | Shows |
// +-------+

export interface GetShowEpisodesOptions {
  limit?: number;
  offset?: number;
  market?: string;
}
