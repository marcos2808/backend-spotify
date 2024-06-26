import { getAccessToken } from "./authenticate.js"
import client from "./axiosClient.js"
import { baseUrl } from "./url.js"

export const getSongById = async (id) => {
    const token = await getAccessToken()
    const response = await client.get(baseUrl+'/tracks/'+id, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })
    return response.data
}

/*
EJEMPLO DE RESPUESTA:
{
  album: {
    album_type: 'single',
    artists: [ [Object] ],
    available_markets: [],
    external_urls: {
      spotify: 'https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc'
    },
    href: 'https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc',
    id: '0tGPJ0bkWOUmH7MEOR77qc',
    images: [ [Object], [Object], [Object] ],
    name: 'Cut To The Feeling',
    release_date: '2017-05-26',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:0tGPJ0bkWOUmH7MEOR77qc'
  },
  artists: [
    {
      external_urls: [Object],
      href: 'https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju',
      id: '6sFIWsNpZYqfjUpaCgueju',
      name: 'Carly Rae Jepsen',
      type: 'artist',
      uri: 'spotify:artist:6sFIWsNpZYqfjUpaCgueju'
    }
  ],
  available_markets: [],
  disc_number: 1,
  duration_ms: 207959,
  explicit: false,
  external_ids: { isrc: 'USUM71703861' },
  external_urls: { spotify: 'https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl' },
  href: 'https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl',
  id: '11dFghVXANMlKmJXsNCbNl',
  is_local: false,
  name: 'Cut To The Feeling',
  popularity: 0,
  preview_url: null,
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:11dFghVXANMlKmJXsNCbNl'
}
*/