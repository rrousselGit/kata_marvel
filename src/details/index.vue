<template>
<Page>
        {{ name }}
</Page>
</template>

<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import Page from "@/components/Page.vue";
import { Route } from "vue-router";
import { client } from "@/clients/marvel";

@Component({
  components: {
    Page,
  },
})
export default class Details extends Vue {
  character: Partial<Character> = {};
  loading = true;

  async created() {
    const id = Number.parseInt(this.$route.params.id, 10);
    try {
      this.character = await client.getCharacter(id);
    } finally {
      this.loading = false;
    }
  }

  get name() {
    return this.character && this.character.name;
  }
}
</script>

<style scoped>
</style>
