import { SearchResponse } from '../../types';

export const searchFixture: SearchResponse = {
  albums: {
    href:
      'https://api.spotify.com/v1/search?query=tool&type=album&offset=0&limit=1',
    items: [
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2yEwvVSSSUkcLeSTNyHKh8',
            },
            href: 'https://api.spotify.com/v1/artists/2yEwvVSSSUkcLeSTNyHKh8',
            id: '2yEwvVSSSUkcLeSTNyHKh8',
            name: 'TOOL',
            type: 'artist',
            uri: 'spotify:artist:2yEwvVSSSUkcLeSTNyHKh8',
          },
        ],
        available_markets: [
          'AD',
          'AE',
          'AR',
          'AT',
          'AU',
          'BE',
          'BG',
          'BH',
          'BO',
          'BR',
          'CA',
          'CH',
          'CL',
          'CO',
          'CR',
          'CY',
          'CZ',
          'DE',
          'DK',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'FI',
          'FR',
          'GB',
          'GR',
          'GT',
          'HK',
          'HN',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IS',
          'IT',
          'JO',
          'JP',
          'KW',
          'LB',
          'LI',
          'LT',
          'LU',
          'LV',
          'MA',
          'MC',
          'MT',
          'MX',
          'MY',
          'NI',
          'NL',
          'NO',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PH',
          'PL',
          'PS',
          'PT',
          'PY',
          'QA',
          'RO',
          'SA',
          'SE',
          'SG',
          'SK',
          'SV',
          'TH',
          'TN',
          'TR',
          'TW',
          'US',
          'UY',
          'VN',
          'ZA',
        ],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6yWMN087PgSimbcVmHLEwG',
        },
        href: 'https://api.spotify.com/v1/albums/6yWMN087PgSimbcVmHLEwG',
        id: '6yWMN087PgSimbcVmHLEwG',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/ab67616d0000b273dce45359981d62e087a29e6f',
            width: 640,
          },
          {
            height: 300,
            url:
              'https://i.scdn.co/image/ab67616d00001e02dce45359981d62e087a29e6f',
            width: 300,
          },
          {
            height: 64,
            url:
              'https://i.scdn.co/image/ab67616d00004851dce45359981d62e087a29e6f',
            width: 64,
          },
        ],
        name: 'Ænima',
        release_date: '1996-09-17',
        release_date_precision: 'day',
        total_tracks: 15,
        type: 'album',
        uri: 'spotify:album:6yWMN087PgSimbcVmHLEwG',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=tool&type=album&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 4262,
  },
  artists: {
    href:
      'https://api.spotify.com/v1/search?query=tool&type=artist&offset=0&limit=1',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2yEwvVSSSUkcLeSTNyHKh8',
        },
        followers: {
          href: null,
          total: 1337186,
        },
        genres: [
          'alternative metal',
          'alternative rock',
          'art rock',
          'nu metal',
          'post-grunge',
          'post-metal',
          'progressive metal',
          'progressive rock',
          'rock',
        ],
        href: 'https://api.spotify.com/v1/artists/2yEwvVSSSUkcLeSTNyHKh8',
        id: '2yEwvVSSSUkcLeSTNyHKh8',
        images: [
          {
            height: 640,
            url:
              'https://i.scdn.co/image/c23701238e46876969ea3b694e9b42b8db133b91',
            width: 640,
          },
          {
            height: 320,
            url:
              'https://i.scdn.co/image/92203c0bb48f7f745fb71e7cbfab847dacdebe9e',
            width: 320,
          },
          {
            height: 160,
            url:
              'https://i.scdn.co/image/ae6df085e0b92414ec2072a1835523a6fedd00c1',
            width: 160,
          },
        ],
        name: 'TOOL',
        popularity: 75,
        type: 'artist',
        uri: 'spotify:artist:2yEwvVSSSUkcLeSTNyHKh8',
      },
    ],
    limit: 1,
    next:
      'https://api.spotify.com/v1/search?query=tool&type=artist&offset=1&limit=1',
    offset: 0,
    previous: null,
    total: 467,
  },
};
