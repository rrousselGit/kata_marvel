<template>
<el-container>
  <el-header>
    Home
  </el-header>
  <el-main>
    <ul v-loading="loading" >
      <CharacterSummaryItem v-for="character in characters" v-bind:key="character.id" v-bind:character="character" />
    </ul>
  </el-main>
</el-container>
</template>

<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import CharacterSummaryItem from "./components/CharacterSummaryItem.vue";
import Page from "@/components/Page.vue";
import { client } from "@/clients/marvel";

@Component({
  components: {
    Page,
    CharacterSummaryItem,
  },
})
export default class HelloWorld extends Vue {
  characters: CharacterSummary[] = [];
  loading = true;

  async created() {
    try {
      this.characters = (await client.getCharacters(0)).characters;
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: lightslategray;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 1000;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.28);
}

.el-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4px;
  padding-top: 20px;
  padding-bottom: 40px;
}

ul > * {
  display: inline-block;
  margin: 6px;
}
</style>
