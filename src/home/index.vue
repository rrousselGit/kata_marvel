<template>
<Page>
    Hello World
</Page>
</template>

<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import Page from "@/components/Page.vue";
@Component({
  components: {
    Page,
  },
})
export default class HelloWorld extends Vue {}
</script>

<style scoped>
</style>
