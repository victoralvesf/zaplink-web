<template>
  <li>
    <div class="contact">
      <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="Avatar">
      <div class="info">
        <h3 :title="data.name">{{ data.name }}</h3>
        <span>{{ data.phone }}</span>
      </div>
    </div>

    <div class="line"></div>

    <p>{{ data.description }}</p>

    <div class="options">
      <button>Conversar</button>
      <button>Apagar</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Contact',
  props: ['data']
}
</script>

<style lang="scss">
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 15px 30px;
    background: var(--white);
    box-shadow: var(--df-shadow);
    border: var(--df-border);
    border-radius: var(--df-b-radius);

    p {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      margin: 20px 0;
      text-align: left;
    }
  }

  .contact {
    display: flex;
    width: 100%;

    img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      margin-right: 15px;
      border: var(--df-border);
    }

    .info {
      display: flex;
      flex-direction: column;
      text-align: left;

      h3 {
        margin: 2px;
        margin: 0;
      }

      span {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .options {
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;

    button {
      padding: 10px 20px;
      color: var(--white);
      border-radius: var(--df-b-radius);

      &:hover {
        opacity: 0.9;
      }
    }

    button:first-child {
      background-color: var(--green);
      margin-right: auto;
    }

    button:last-child {
      background-color: var(--red);
    }
  }
</style>
