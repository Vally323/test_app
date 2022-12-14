<template>
  <div>
    <div class="track" v-if="data && data.nowplaying">
      <my-track
        v-for="item in sortedData"
        :key="item.artist + item.title"
        :artist="item.artist"
        :duration="item.duration"
        :iTunesTrackUrl="item.iTunesTrackUrl"
        :imageUrl="item.imageUrl"
        :previewUrl="item.previewUrl"
        :status="item.status"
        :time="item.time"
        :title="item.title"
      />
    </div>
    <div v-else>
      <my-loader />
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@/composables/fetch";
import { computed } from "vue";

let { data } = useFetch("http://localhost:8888/tracks");

const sortedData = computed(() => {
  const currentTrack = data.value.nowplaying.find(
    (item) => item.status === "playing"
  );

  const res = data.value.nowplaying
    .filter((item) => item.status === "history")
    .sort((curr, next) => (new Date(curr.time) > new Date(next.time) ? 1 : 0));
  res.unshift(currentTrack);

  return res;
});
</script>

<script>
import MyTrack from "@/src/components/my-track.vue";
import MyLoader from "@/src/helpers/my-loader.vue";
export default {
  components: {
    "my-track": MyTrack,
    "my-loader": MyLoader,
  },
};
</script>

<style scoped>
.track {
  margin: 20px auto;
}
</style>
