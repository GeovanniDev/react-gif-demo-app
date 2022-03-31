export const getGifsPerCategory = async ( category ) => {
    const apiUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'M9kFgQMWVxGKTK8JqnQAFnzZjxCa2k48';

    const request = await fetch(`${apiUrl}?${ new URLSearchParams({
        api_key: apiKey,
        q: encodeURI(category),
        limit: 10
        }).toString() }`
    );
    const { data } = await request.json();
    const findGifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif?.images?.downsized_medium?.url
    }));
    return findGifs;
}