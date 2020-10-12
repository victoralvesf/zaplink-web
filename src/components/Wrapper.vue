<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Wrapper'
}
</script>

<style>
  .wrapper {
    width: min(1366px, 90%);
    height: 100%;
    margin: 0 auto;
  }
</style>
