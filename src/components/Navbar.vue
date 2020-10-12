<template>
  <div id="nav">
    <Wrapper>
      <div class="content">
        <router-link to="/dashboard">
          <img src="../assets/logo.svg" alt="Logo">
        </router-link>
        <router-link to="/login">Sair</router-link>
      </div>
    </Wrapper>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
  #nav {
    width: 100%;
    height: 70px;
    background-color: var(--primary);

    img {
      width: auto;
      height: 40px;
      float: left;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        margin: 0;
      }

      a:last-child {
        padding: 10px 25px;
        color: var(--white);
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        background-color: rgba(0,0,0,0.5);
        border-radius: var(--df-b-radius);

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
</style>
