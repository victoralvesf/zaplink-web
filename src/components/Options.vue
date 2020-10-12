<template>
  <div class="options">
    <h2>Seu gerenciador digital de contatos</h2>

    <div class="operations">
      <button>
        <fa-icon icon="plus" />
        Adicionar
      </button>

      <SearchField />
    </div>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField'

export default {
  name: 'Options',
  components: {
    SearchField
  }
}
</script>

<style lang="scss" scoped>
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0px;
}

.operations {
  display: flex;

  button {
    background-color: var(--green);
    color: var(--white);
    padding: 10px;
    margin-right: 10px;
    border-radius: var(--df-b-radius);
  }
}
</style>
