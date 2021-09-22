export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=vmt8YoZybS6J5GEHmYMeEOisAk5gvJ3h`
    const resp = await fetch(url)
    console.log('resp => ', resp)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))
    return gifs
}