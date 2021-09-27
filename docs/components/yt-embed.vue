<template>
  <div class="video-container" v-if="videoUrl != ''">
    <iframe width="896" height="525" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "yt-embed",
  setup(props) {
    return {
      videoId: props.video,
      videoUrl: 'https://www.youtube.com/embed/' + props.video
    }
  },
  props: {
    video: {
      type: String,
      required: true,
      default: () => ""
    },

  }
}
</script>

<style scoped>
.video-container { position: relative; padding-bottom: 56.25%; padding-top: 30px; height: 0; overflow: hidden; }

.video-container iframe, .video-container object, .video-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>