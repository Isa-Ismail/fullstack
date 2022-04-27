import axios from 'axios'
import {createApi} from 'unsplash-js'

export const locationFetcher = async () => {
  if (!navigator.geolocation) {
      alert('Your location could not be extracted')
  }else {
      navigator.geolocation.getCurrentPosition((position) => {

          const {latitude, longitude} = position.coords

          setLocation({latitude: latitude.toString(), longitude: longitude.toString()})

          dispatch({type: 'LATLONG', payload: latitude.toString()+','+longitude.toString()})

      }, () => {
          alert('browser unsupported geolocation')
      })
          
  }
}

export const photourls = async ( query, perPage) => {
    const unsplash = createApi ({
      accessKey: "mwl543ghjT95oBNVZVd0CIPzYebB3kcMO82SKVroS7M"
    })
    const photos = await unsplash.search.getCollections({
      query: query,
      perPage: perPage,
    })

    let results = photos.response.results
    let url = results.map(item => item.cover_photo.urls["small"])
    return url
}

export const fetcher = async (query, near, limit) => {

    const photos = await photourls('coffee shop', 10)

    const options = {
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3YiDK9d2qMInFD3n0uNWVeh+htyxYFv162KH1Qg/CldU='
        }
    }
    
    const {data} = await axios.get(`https://api.foursquare.com/v3/places/search?query=${query}&open_now=true&near=${near}&sort=POPULARITY&limit=${limit}`, options)

    return data.results.map( (item, idx) => {
      return {
        ...item, 
        imgUrl: photos[idx]
      }
    })
}

export const clientFetcher = async (ll, limit) => {

  const photos = await photourls('coffee shop', 10)

  const options = {
      headers: {
        Accept: 'application/json',
        Authorization: 'fsq3YiDK9d2qMInFD3n0uNWVeh+htyxYFv162KH1Qg/CldU='
      }
  }
  try {
    const {data} = await axios.get(`https://api.foursquare.com/v3/places/search?query=coffee&ll=${ll}&sort=POPULARITY&limit=${limit}`, options)
    return data.results.map( (item, idx) => {
      return {
        ...item, 
        imgUrl: photos[idx]
      }
    })
  } catch (error) {
    console.log(error)  
  }

}