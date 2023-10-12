<template>
  <div class="login">
    <div class="form">
      <form 
        v-if="!showReg"
        @submit.prevent="login"
        class="form_data" 
      >
        <h2 class="form__title">
          Login
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
          value="Login"
        />
      </form>

      <button
        v-if="!showReg" 
        @click="changeRegVisible"
        >
        Зарегистрироваться
      </button>

      <form 
        v-if="showReg"
        @submit.prevent="register" 
        class="form_data"
      >
        <h2 class="form__title">
          Registration
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
          value="Register"
        />
      </form>

      <!-- <button @click="test">
        btn 
      </button> -->
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
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value)
    }

    const register = () => {
      if(register_form.value.name) store.dispatch('register', register_form.value)
      else alert('Введите имя')
    }

    const test = () => {
      store.dispatch('test2')
    }

    return {
      login_form,
      register_form,
      register,
      login
    }
  },
  data() {
    return {
      showReg: false 
    }
  },
  methods: {
    changeRegVisible() {
      this.showReg = !this.showReg
    }
  },
  beforeMount() {
    const store = useStore();
  }
}

</script>