<template>
  <input type="text" v-model="query">
  <ul>
    <li v-for="artist in results">{{ artist.name }}</li>
  </ul>
</template>

<script lang="ts">
import {ref, watch } from 'vue'
import {JsonServiceClient} from '@servicestack/client'
import {Artists, QueryArtists} from "../shared/dtos";

let client = new JsonServiceClient("https://chinook.netcore.io")

export default {
  name: "chinook-data",
  setup() {
    const data: Artists[] = [];
    const results = ref(data)
    const query = ref("")

    const updateArtists = async (val) => {
      if(!val) {
        results.value = [];
        return;
      }
      let req = new QueryArtists()
      req.nameStartsWith = val
      results.value = (await client.get(req)).results
    };

    watch(query, async (newVal) => {
      await updateArtists(newVal)
    })

    return {
      query: query,
      results: results
    }
  }
}
</script>

<style scoped>

</style>