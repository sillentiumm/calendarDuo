<template>
  <div class="details">
    <div class="details__title">
      {{ date.day }} {{ date.month }} {{ date.year }}
    <router-link
      :to="{ name: 'main'}"
    >
      <svg class="details-title__img" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M493.519,211.306c-11.937-11.936-27.807-18.509-44.727-18.509l-233.002-0.003l28.465-28.464 c11.957-11.941,18.542-27.823,18.542-44.722c0-34.849-28.354-63.2-63.219-63.2c-16.874,0-32.741,6.573-44.681,18.512 L18.601,211.22c-8.841,8.806-14.828,19.891-17.315,32.056C0.432,247.441,0,251.722,0,256.001c0,16.929,6.607,32.832,18.583,44.761 l136.288,136.287c11.939,11.958,27.822,18.543,44.723,18.543c34.849,0,63.201-28.353,63.203-63.201 c0.002-16.879-6.571-32.752-18.512-44.696l-28.493-28.493h233.034c16.886,0,32.76-6.574,44.694-18.513 C518.16,276.045,518.16,235.949,493.519,211.306z"/></g></g></svg>
    </router-link>
    </div>
    <div class="details-table">
      <div 
        v-for="(item, index) in $store.state.currentList"
        class="details-table-list"
      >
        <label class="container">
          <input type="checkbox" v-model="item.checked" @change="changeCkekbox(item, index)">
          <span class="checkmark"></span>
        </label>
        <div :class="{ checkboxTrue: item.checked }">{{ item.message }}</div>
      </div>
      <div 
        v-if="!$store.state.currentList.length"
        class="details-table__title"  
      >
        На этот день еще не заплонированы дела
      </div>
      <div class="details-table-list__add">
        <input 
          type="text"
          placeholder="Добавить"
          v-model="addMessage_form.data"
        />
        <button 
          @click="CalendarAddMessage"
          class="main-form-btn details-btn"
        >
          ✔
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'

export default {
  setup() {
    const store = useStore()
    const addMessage_form = ref({});
    
    const CalendarAddMessage = () => {
      store.dispatch('CalendarAddMessage', {name: localStorage.name, data: addMessage_form.value, date: store.state.currentRoomDate})
    }

    const specValue = () => {
      store.dispatch('onValueCurrentDate')
    }

    const changeCkekbox = (item, index) => {
      store.dispatch('changeCkekbox', {
        message: item.message, checked: item.checked, index: index, 
        year: store.state.currentRoomDate.year, month: store.state.currentRoomDate.month, day: store.state.currentRoomDate.day
      })
    }

    return {
      addMessage_form,
      CalendarAddMessage,
      specValue,
      changeCkekbox
    }
  },
  data() {
    return {
      date: {
        year: null,
        month: null,
        day: null
      },
      list: []
    }
  },
  async beforeMount() {
    const store = useStore()
    store.state.currentRoomDate.year = this.$route.query.year
    store.state.currentRoomDate.month = this.$route.query.month
    store.state.currentRoomDate.day = this.$route.query.day

    this.date.year = this.$route.query.year
    this.date.month = this.$route.query.month.slice(0, -1) + 'я'
    this.date.day = this.$route.query.day

    this.specValue()
  },
}

</script>