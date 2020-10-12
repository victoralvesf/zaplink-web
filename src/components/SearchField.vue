<template>
  <form v-on:submit.prevent>
    <input
      type="text"
      name="search-contacts"
      placeholder="Número do WhatsApp"
    />

    <button type="submit">
      <fa-icon icon="search" />
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchField'
}
</script>

<style lang="scss" scoped>
  form {
    display: flex;

    input {
      padding: 10px;
      border: var(--df-border);
      border-top-left-radius: var(--df-b-radius);
      border-bottom-left-radius: var(--df-b-radius);
    }

    button {
      padding: 0 15px;
      border-top-right-radius: var(--df-b-radius);
      border-bottom-right-radius: var(--df-b-radius);
      background-color: var(--green);
      color: var(--white);
    }
  }
</style>
