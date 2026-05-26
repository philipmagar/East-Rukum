import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useMusicPlayer = (audioUrl, villagePaths) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const isVillageSection = villagePaths.includes(location.pathname);
    setIsVisible(isVillageSection);

    if (isVillageSection) {
      const playAudio = async () => {
        if (audioRef.current) {
          try {
            await audioRef.current.play();
            setIsPlaying(true);
          } catch (err) {
            console.log("Autoplay blocked. User interaction required.");
            setIsPlaying(false);
          }
        }
      };
      playAudio();
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [location.pathname, villagePaths]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio play blocked by browser."));
    }
    setIsPlaying(!isPlaying);
  };

  return { isPlaying, isVisible, audioRef, togglePlay };
};
