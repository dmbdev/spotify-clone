import { usePlayerStore } from 'src/store/playerStore'
import { Pause, Play } from "@icons/PlayerIcons"

interface CardPlayButtonProps {
  id: string;
  size?: 'small' | 'medium' | 'large';
}

export function CardPlayButton ({ id, size = 'small' }: CardPlayButtonProps) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data

        setIsPlaying(true)
        setCurrentMusic({ songs: songs, playlist: playlist, song: songs[0] })
      })
  }

  return (
    <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">     
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}