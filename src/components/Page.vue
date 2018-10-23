<template>
<div class="view">
    <slot></slot>
</div>
</template>

<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: "Page" })
export default class Page extends Vue {}
</script>

<style scoped>
.view {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
