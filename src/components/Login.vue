<template>
  <div class="login">
    <div class="login-form">
      <form 
        @submit.prevent="login"
        class="form_data" 
      >
        <h2 class="form__title">
          Вход в аккаунт
        </h2>
        <input 
          type="email"
          placeholder="Email addres"
          v-model="login_form.email"
        />
        <input 
          type="password"
          placeholder="password"
          v-model="login_form.password"
        />
        <input
          type="submit"
          value="Войти"
        />
      </form>
      <div 
        class="login-text"
        >
        Нет аккаунта?
        <router-link
          :to="{ name: 'register'}"
        >
          зарегестрироваться
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from '../store/index.js'

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value)
    }

    return {
      login_form,
      login
    }
  },
  // data() {

  // },
  beforeMount() {
    const store = useStore();
  }
}

</script>



