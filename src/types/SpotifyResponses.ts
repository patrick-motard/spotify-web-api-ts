import * as SpotifyObjects from './SpotifyObjects';

// +--------+
// | Albums |
// +--------+

export type GetAlbumsResponse = {
  albums: Array<SpotifyObjects.Album | null>;
};

export type GetAlbumTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedTrack
>;

// +---------+
// | Artists |
// +---------+

export type GetArtistAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedAlbum
>;

export type GetArtistsResponse = {
  artists: SpotifyObjects.Artist[];
};

export type GetArtistTopTracksResponse = {
  tracks: SpotifyObjects.Track[];
};

export type GetRelatedArtistsResponse = {
  artists: SpotifyObjects.Artist[];
};

// +--------+
// | Browse |
// +--------+

export type GetAvailableGenreSeedsResponse = {
  genres: string[];
};

export type GetCategoriesResponse = {
  categories: SpotifyObjects.Paging<SpotifyObjects.Category>;
};

export type GetCategoryPlaylistsResponse = {
  playlists: SpotifyObjects.Paging<SpotifyObjects.SimplifiedPlaylist>;
};

export type GetFeaturedPlaylistsResponse = {
  message: string;
  playlists: SpotifyObjects.Paging<SpotifyObjects.SimplifiedPlaylist>;
};

export type GetNewReleasesResponse = {
  albums: SpotifyObjects.Paging<SpotifyObjects.SimplifiedAlbum>;
};

export type GetRecommendationsResponse = {
  seeds: SpotifyObjects.RecommendationSeed[];
  tracks: SpotifyObjects.Track[];
};

// +----------+
// | Episodes |
// +----------+

export type GetEpisodesResponse = {
  episodes: Array<SpotifyObjects.Episode | null>;
};

// +--------+
// | Follow |
// +--------+

export type GetFollowedArtistsResponse = {
  artists: SpotifyObjects.CursorBasedPaging<SpotifyObjects.Artist>;
};

// +---------+
// | Library |
// +---------+

export type GetSavedAlbumsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SavedAlbum
>;

export type GetSavedShowsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SavedShow
>;

export type GetSavedTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.SavedTrack
>;

// +-----------------+
// | Personalization |
// +-----------------+

export type GetMyTopArtistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.Artist
>;

export type GetMyTopTracksResponse = SpotifyObjects.Paging<
  SpotifyObjects.Track
>;

// +--------+
// | Player |
// +--------+

export type GetRecentlyPlayedTracksResponse = SpotifyObjects.CursorBasedPaging<
  SpotifyObjects.PlayHistory
>;

// +-----------+
// | Playlists |
// +-----------+

export type GetMyPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export type GetPlaylistItemsResponse = SpotifyObjects.Paging<
  SpotifyObjects.PlaylistItem
>;

export type GetUserPlaylistsResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedPlaylist
>;

export type SnapshotIdResponse = {
  snapshot_id: string;
};

// +--------+
// | Search |
// +--------+

export type SearchResponse = Partial<
  SearchAlbumsResponse &
    SearchArtistsResponse &
    SearchEpisodesResponse &
    SearchPlaylistsResponse &
    SearchShowsResponse &
    SearchTracksResponse
>;

export type SearchAlbumsResponse = {
  albums: SpotifyObjects.Paging<SpotifyObjects.SimplifiedAlbum>;
};

export type SearchArtistsResponse = {
  artists: SpotifyObjects.Paging<SpotifyObjects.Artist>;
};

export type SearchEpisodesResponse = {
  episodes: SpotifyObjects.Paging<SpotifyObjects.SimplifiedEpisode>;
};

export type SearchPlaylistsResponse = {
  playlists: SpotifyObjects.Paging<SpotifyObjects.SimplifiedPlaylist>;
};

export type SearchShowsResponse = {
  shows: SpotifyObjects.Paging<SpotifyObjects.SimplifiedShow>;
};

export type SearchTracksResponse = {
  tracks: SpotifyObjects.Paging<SpotifyObjects.Track>;
};

// +-------+
// | Shows |
// +-------+

export type GetShowsResponse = {
  shows: Array<SpotifyObjects.SimplifiedShow | null>;
};

export type GetShowEpisodesResponse = SpotifyObjects.Paging<
  SpotifyObjects.SimplifiedEpisode
>;

// +--------+
// | Tracks |
// +--------+

export type GetAudioFeaturesForTracksResponse = {
  audio_features: Array<SpotifyObjects.AudioFeatures | null>;
};

export type GetTracksResponse = {
  tracks: Array<SpotifyObjects.Track | null>;
};