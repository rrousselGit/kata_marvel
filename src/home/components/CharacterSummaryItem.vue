<template>
<li>
  <router-link v-bind:to=to>
  <h5>{{ character.name }}</h5>
  </router-link>
</li>
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
  character!: CharacterSummary;

  get to(): string {
    return `/characters/${this.character.id.toString()}`;
  }
}
</script>

<style scoped>
</style>
