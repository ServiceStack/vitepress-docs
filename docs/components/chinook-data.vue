<template>
  <ul>
    <li v-for="album in albums">{{album.title}}</li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue'
import {JsonServiceClient} from '@servicestack/client'
import {Albums, Hello, QueryAlbums} from "../shared/dtos";

export default {
  name: "chinook-data",
  setup(props) {
    const albums = ref([])
    let client = new JsonServiceClient("https://chinook.netcore.io")
    const getAlbums = async () => {
      let req = new QueryAlbums()
      albums.value = (await client.get(req)).results
    }

    onMounted(getAlbums)

    return {
      albums,
      getAlbums
    }
  }
}
</script>

<style scoped>

</style>