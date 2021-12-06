import React, {useEffect, useState} from 'react';
import useAuth from './useAuth';
import { Form } from 'react-bootstrap';
import SpotifyWebApi from 'spotify-web-api-node';
import TrackSearchResult from './TrackSearchResult';
import Player from './Player';

const spotifyApi = new SpotifyWebApi({
    clientId: 'a15495da3c4f42c89a4a4560e54a3c19',
})

export default function Dashboard ({code}) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()


    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
    }
    
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
    
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce(
                        (smallest, image) => {
                            if (image.height < smallest.height) return image
                            return smallest
                        },track.album.images[0]
                    )
        
                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url,
                    }
                })
            )
        })
        return () => (cancel = true)
    }, [search, accessToken])


    return (
        <div class="container d-flex flex-column py-2" style={{ height: "35rem" }}>
            <Form.Control
                type="search"
                placeholder="Search Songs/Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {searchResults.map(track => (
                <TrackSearchResult
                    track={track}
                    key={track.uri}
                    chooseTrack={chooseTrack}
                />
                ))}
            </div>
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
            </div>
        </div>
    )
}