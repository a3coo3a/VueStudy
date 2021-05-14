<template>
  <header>
    <h1>TODO it!</h1>
    <span>{{ title }}</span>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>
<style scoped>
h1 {
  color: #2f3852;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
