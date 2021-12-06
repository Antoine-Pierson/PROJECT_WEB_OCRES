import React, { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: '#000',
        bgColor: '#fff',
        color: '#000',
        loaderColor: '#000',
        sliderColor: '#1cb954',
        activeColor: '#1cb954',
        trackArtistColor: '#000',
        trackNameColor: '#000',
      }}
    />
  )
}