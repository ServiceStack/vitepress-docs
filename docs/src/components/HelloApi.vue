<template>
  <div class="form-group">
    <input type="text" placeholder="Your name" v-model="txtName" />
    <h3 class="result pt-2">{{ result }}</h3>
  </div>
</template>

<script lang="ts">
import {ref, watch } from 'vue'
import {Hello} from "../shared/dtos";
import client from "../shared/client"


export default {
  name: "HelloApi",
  setup() {
    const result = ref("")
    const txtName = ref("")

    const update = async (val) => {
      if(!val) {
        result.value = "";
        return;
      }
      let req = new Hello()
      req.name = val
      result.value = (await client.get(req)).result
    };

    watch(txtName, async (newVal) => {
      await update(newVal)
    })

    return {
      txtName: txtName,
      result: result
    }
  }
}
</script>

<style scoped>

</style>