<template>
  <div class="track">
    <p class="info-text">{{ artist }}-{{ title }}</p>
    <img class="track-image" :src="imageUrl || alternativeImage" alt="image" />
    <div class="audio-block">
      <audio controls>
        <source :src="iTunesTrackUrl" type="audio/mpeg" />
      </audio>
      <p class="info-text">{{ duration }}</p>
    </div>
  </div>
</template>

<script setup>
const alternativeImage =
  "https://img.freepik.com/premium-vector/realistic-vinyl-disc-mockup-empty-blank-music-album-cover-isolated-white-background-retro-musical-long-play-white-template-paper-box-3d-vector-illustration_341509-1731.jpg?w=2000";

defineProps({
  artist: {
    type: String,
    default: "Unknown",
  },
  duration: {
    type: String,
    default: "00:00:00",
  },
  iTunesTrackUrl: {
    type: String,
    default: "https://itunes.apple.com/",
  },
  imageUrl: {
    type: String,
  },
  previewUrl: {
    type: String,
    default: "",
  },
  status: {
    type: String,
  },
  time: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "Unknown",
  },
});
</script>

<style scoped lang="scss">
.track {
  border: solid 1px dimgrey;
  text-align: center;
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;

  .info-text {
    font-size: 20px;
    font-family: sans-serif;
    font-weight: 500;
  }

  .track-image {
    max-width: 400px;
    max-height: 400px;
  }

  .audio-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
  }
}
</style>
