<template>
  <button class="button">
    <span>
      <i v-for="(i, key) in buttonText" :key="key">{{i}}</i>
    </span>
  </button>
</template>
<script>
export default {
  props: ["span"],
  computed: {
    buttonText() {
      return this.span.split("").join("");
    }
  }
};
</script>
