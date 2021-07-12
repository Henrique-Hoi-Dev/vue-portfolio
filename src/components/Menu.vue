<template>
  <div class="menu">
    <template>
      <div class="mb-2">
        <b-avatar
          class="avatar"
          :src="require('@/assets/avatar.jpeg')"
          size="6rem"
        >
        </b-avatar>
      </div>
      <div>
        <p>{{ getFormat() }}</p>
      </div>
    </template>
    <div class="px-2 py-2">
      <b-button variant="info" to="/">
        Home <b-icon icon="list-nested" />
      </b-button>
      <b-button variant="info" to="/story">
        Resume <b-icon icon="person-fill" />
      </b-button>
      <b-button variant="info">
        <b-link
          href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"
          target="_blank"
        >
          Linkedin <b-icon icon="linkedin" />
        </b-link>
      </b-button>
      <b-button variant="info">
        <b-link href="https://github.com/Henrique-Hoi-Dev" target="_blank">
          Github <b-icon icon="github" />
        </b-link>
      </b-button>
      <!-- botao modo celular -->
      <button @click="$router.push('/')" class="bt-menu" type="button">
        <b-icon icon="list-nested" />
      </button>
      <button @click="$router.push('/story')" class="bt-menu" type="button">
        <b-icon icon="person-fill" />
      </button>
      <button class="bt-menu" type="button">
        <a
          href="https://www.linkedin.com/in/henrique-hoinacki-a98b851a5/"
          target="_blank"
        >
          <b-icon icon="linkedin" />
        </a>
      </button>
      <button class="bt-menu" type="button">
        <a href="https://github.com/Henrique-Hoi-Dev" target="_blank">
          <b-icon icon="github" />
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
window.locale = enUS;

export default {
  data() {
    return {
      format,
    };
  },
  methods: {
    getFormat() {
      return this.format(new Date(), 'EEEEEE, d MMMM, yyyy HH:mm', {
        locale: window.locale,
      });
    },
  },
};
</script>

<style scoped lang="scss">
p {
  color: #f7fff7;
}
.px-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  width: 8.2rem;

  margin-top: 5px;
  font-family: Lexend, sans-serif;
}
.btn a {
  color: #ced2d8;
  text-decoration: none;
  align-items: center;
}
.px-2 button {
  width: 8.2rem;

  color: #ced2d8;
  font-family: Lexend, sans-serif;
}
.mb-2 {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8rem;
}
.b-avatar {
  border: 2px solid #a1ff0a;
}
@media (min-width: 800px) {
  .bt-menu {
    display: none;
  }
  .bt-menu a {
    display: none;
  }
}

@media (max-width: 800px) {
  .px-2 {
    margin: 20px 0 0 70px;
  }
  .btn {
    margin-top: 10px;
    display: none;
  }
  .btn a {
    width: 20px;
  }
  .bt-menu {
    width: 55px !important;
    margin-right: 80px;
    border-radius: 3px;
    margin-top: 5px;
    background-color: #17a2b8;
    svg {
      color: #f7fff7;
    }
  }
  .bt-menu a {
    text-decoration: none;
    color: #f7fff7;
  }
}
</style>
