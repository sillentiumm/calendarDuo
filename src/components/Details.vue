<template>
  <div class="details">
    <div class="details__title">
      {{ date.day }} {{ date.month }} {{ date.year }}
    </div>
    <button>добавить</button>
    <form @submit.prevent="CalendarAddMessage" class="form_data">
        <h2 class="form__title">Введите сообщение</h2>
        <input 
          type="text"
          placeholder="Сообщение"
          v-model="addMessage_form.data"
        />
        <!-- v-model="join_room_form.name" -->
        <input
          type="submit"
          value="CalendarAddMessage"
        />
      </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'


// const db = getDatabase(app)
// const settingsRef = ref(db, '/rooms')


export default {
  setup() {
    const store = useStore()
    const addMessage_form = ref({});
    
    const CalendarAddMessage = () => {
      store.dispatch('CalendarAddMessage', {data: addMessage_form.value, date: store.state.currentRoomDate})
    }

    return {
      addMessage_form,
      CalendarAddMessage
    }
  },
  data() {
    return {
      date: {
        year: null,
        month: null,
        day: null
      }
    }
  },
  beforeMount() {
    const store = useStore()
    // console.log(store.state.currentRoomDate)
    store.state.currentRoomDate.year = this.$route.query.year
    store.state.currentRoomDate.month = this.$route.query.month
    store.state.currentRoomDate.day = this.$route.query.day
  },
}

</script>