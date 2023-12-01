<template>
  <div class="register">
    <div class="register-from">
      <form 
        @submit.prevent="register" 
        class="form_data"
      >
        <h2 class="form__title">
          Регистрация
        </h2>
        <input 
          type="email"
          placeholder="Email addres"
          v-model="register_form.email"
        />
        <input 
          type="password"
          placeholder="password"
          v-model="register_form.password"
        />
        <input 
          type="text"
          placeholder="имя"
          v-model="register_form.name"
        />
        <input
          type="submit"
          value="Регистрация"
        />
        <div 
          class="login-text"
          >
          Есть аккаунт?
          <router-link
            :to="{ name: 'login'}"
          >
            войти
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { useStore } from '../store/index.js'

export default {
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      if(register_form.value.name) store.dispatch('register', register_form.value)
      else alert('Введите имя')
    }

    return {
      register_form,
      register,
    }
  },

}

</script>