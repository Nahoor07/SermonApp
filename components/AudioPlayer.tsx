import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";
import { FontAwesome5 } from "@expo/vector-icons";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackInstance, setPlaybackInstance] = useState<Audio.Sound | null>(
    null
  );
  const [playbackPosition, setPlaybackPosition] = useState<number>(0);
  const [playbackDuration, setPlaybackDuration] = useState<number>(0);
  const playbackInstanceRef = useRef<Audio.Sound | null>(null);

  const loadAudio = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      { uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
      { shouldPlay: isPlaying }
    );
    playbackInstanceRef.current = sound;
    setPlaybackInstance(sound);
    setPlaybackDuration(status.durationMillis);
    sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setPlaybackPosition(status.positionMillis ?? 0);
      setPlaybackDuration(status.durationMillis ?? 0);
    }
  };

  const playPause = async () => {
    if (playbackInstance) {
      if (isPlaying) {
        await playbackInstance.pauseAsync();
      } else {
        await playbackInstance.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onSliderValueChange = async (value: number) => {
    const newPosition = value * playbackDuration;
    if (playbackInstance) {
      await playbackInstance.setPositionAsync(newPosition);
    }
  };

  useEffect(() => {
    loadAudio();

    return () => {
      if (playbackInstance) {
        playbackInstance.unloadAsync();
      }
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playPause}>
        {isPlaying ? (
          <FontAwesome5 name="pause" size={25} color="#988558" />
        ) : (
          <FontAwesome5 name="play" size={25} color="#7B3F00" />
        )}
      </TouchableOpacity>
      <Text style={styles.positionText}>
        {Math.floor(playbackPosition / 1000)}s
      </Text>
      <Slider
        style={styles.slider}
        value={playbackPosition / playbackDuration}
        onValueChange={onSliderValueChange}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text style={styles.positionText}>
        {Math.floor(playbackDuration / 1000)}s
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  button: {
    padding: 10,
    backgroundColor: "#61DAFB",
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  slider: {
    width: 250,
    height: 40,
  },
  positionText: {
    color: "#000",
    fontSize: 16,
    marginBottom: 8,
  },
});

export default AudioPlayer;
