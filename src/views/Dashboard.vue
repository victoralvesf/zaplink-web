<template>
  <div class="dashboard">
    <Wrapper>
      <Options />

      <ul>
        <Contact v-for="contact in contacts" :key="contact.id" :data="contact" />
      </ul>
    </Wrapper>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact'
import Options from '@/components/Options'

export default {
  name: 'Dasboard',
  components: {
    Contact,
    Options
  },
  data: () => ({
    contacts: [
      {
        id: 1,
        name: 'Victor',
        phone: '(85) 98943-6075',
        description: 'Consultoria de automacao de testes e textos muito longos iguais ao rabo de uma sucuri gigante e eu nao sai mais o que estou escrevendo'
      },
      {
        id: 2,
        name: 'Luiz',
        phone: '(15) 98754-6075',
        description: 'Consultoria de dev front-end'
      },
      {
        id: 3,
        name: 'Paulao da Regulagem',
        phone: '(15) 98754-6075',
        description: 'Mecanico'
      },
      {
        id: 4,
        name: 'Agostinho Carrara',
        phone: '(15) 98754-6075',
        description: 'Taxista'
      }
    ]
  })
}
</script>

<style lang="scss">
  ul {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1em;
  }
</style>
