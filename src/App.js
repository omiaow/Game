import { useState, useEffect, useRef  } from 'react';
import './App.css';
import tileTimings from './enough.json';
import musicFile from './music.mp3';

const MagicTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef(null);

  const startGame = () => {
    setIsStarted(true);
    // Play music when game starts
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play();
      }, "100");
    }

    tileTimings.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setTiles((prevTiles) => [
          ...prevTiles,
          {
            id: new Date().getTime() + index, // Ensure unique ID
          },
        ]);
      }, parseInt(item.expected, 10));

      return () => clearTimeout(timeout);
    });
  };

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      // Remove tiles that reached the bottom
      setTiles((prevTiles) =>
        prevTiles.filter((tile) => !tile.hasReachedBottom)
      );
    }, 100);

    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <div className="magic-tiles-container">
      <button onClick={startGame} disabled={isStarted}>
        Start
      </button>
      <div className="game-area">
        {tiles.map((tile) => (
          <div key={tile.id} className="tile" />
        ))}
      </div>
      <audio ref={audioRef} src={musicFile} />
    </div>
  );
};

export default MagicTiles;
