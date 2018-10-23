<template>
<router-link v-bind:to=to>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="thumbnail" />
    <h5>{{ character.name }}</h5>
  </el-card>
</router-link>
</template>

<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import Page from "@/components/Page.vue";
@Component({
  components: {
    Page,
  },
})
export default class CharacterSummaryItem extends Vue {
  @Prop()
  readonly character!: CharacterSummary;

  get to(): string {
    return `/characters/${this.character.id.toString()}`;
  }

  get thumbnail(): string {
    const { extension, path } = this.character.thumbnail;
    return `https://${path}.${extension}`;
  }
}
</script>

<style scoped>
.el-card {
  width: 230px;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
