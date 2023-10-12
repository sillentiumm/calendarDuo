
<template>
  <div class="main">
    <div v-if="false" class="main-userinfo">
      <div v-if="user.room">
        {{ user.room }}
      </div>

      <div v-if="user.room">
        юзер рум
      </div>

      <div v-if="!user.room"> 
        не юзер рум
      </div>

      <form @submit.prevent="createRoom" class="form_data">
        <h2 class="from__title">
          Создать комнату
        </h2>
        <input 
          type="text"
          placeholder="Название комнаты"
          v-model="create_room_form.name"
        />
        <input
          type="submit"
          value="createRoom"
        />
      </form>
      
      <form @submit.prevent="joinRoom" class="form_data">
        <h2 class="form__title">Вступить в комнату</h2>
        <input 
          type="text"
          placeholder="Название комнаты"
          v-model="join_room_form.name"
        />
        <input
          type="submit"
          value="joinRoom"
        />
      </form>

      <button @click="$store.dispatch('logout')" class="logout">
        logout
      </button>
    </div>

    <div class="main-calendar">
      <div class="calendar__title">
        <div 
        @click="decrementCalendar"
          class="calemdar-arrow__left">
        </div>
        <div> {{ currentMonth }}  {{ currentYear }}</div>
        <div 
          @click="incremectCalendar"
          class="calemdar-arrow__right">
        </div>
      </div>
        <div class="calendar">
          <div class="calendar-table">
            <div v-for="item in calendarDaysTitle" class="calendar_cell calendar_cell_up">
              {{ item }}
            </div>
            <!-- <div v-for="item in calendarDays" class="calendar_cell">
              {{ item }}
            </div> -->
            <router-link 
              v-for="item in calendarDays" 
              class="calendar_cell"
              :to="{ name: 'details', query: { year:this.currentYear , month: this.currentMonth, day: item}}">
              {{ item }}
            </router-link>
          </div>
        </div>
    </div>

    <!-- <div @click="test4">
      5555555555
    </div> -->

    <!-- <router-link :to="{ name: 'details', query: { id: 2 } } ">
      link
    </router-link> -->
    <!-- <router-link :to="{ name: 'details', query: { month: this.currentMonth, day:  2} }">
      link
    </router-link> -->
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue'


export default {
  setup() {
    const store = useStore()
    const create_room_form =({ref})
    const join_room_form =({ref})

    const createRoom = () => {
      if(create_room_form.name) store.dispatch('createRoom', create_room_form.name)
      else alert('Введите название комнаты')
    }

    const joinRoom = () => {
      if(join_room_form.name) store.dispatch('joinRoom', join_room_form.name)
      else alert('Введите название комнаты')
    }

    const test4 = () => {
      store.dispatch('test4')
    }


    return {
      create_room_form,
      join_room_form,
      createRoom,
      joinRoom,
      test4
    }
  },
  data() {
    return {
      user: {
        email: null,
        room: null,
      },
      calendarDaysTitle: [
        'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
      ],
      calendarDays: [],
      calendarMonth: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      currentDate: null,
      currentMonth: '',
      currentYear: ''
    }
  },
  methods: {
    createCalendar(currentDate) {
      let mon = currentDate.getMonth() 
      let year = currentDate.getFullYear()

      Date.prototype.daysInMonth = function() {
		    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
	    };

      function getDay(date) {
        let day = date.getDay()
        if(day==0) day =7
        return day-1
      }

      let d = new Date(year, mon)

      for(let i=0; i<getDay(d); i++) {
        this.calendarDays.push('')
      }

      for(let j=0; j<d.daysInMonth(); j++) {
        this.calendarDays.push(j+1)
      }

      while (this.calendarDays.length % 7 !== 0) {
        this.calendarDays.push('')
      }
    },
    incremectCalendar() {
      let month = this.currentDate.getMonth() + 1
      let year = this.currentDate.getFullYear()
      if (month == 12) {
        month = 0
        year++
      }
      this.updateCalendar(month, year)
    },

    decrementCalendar() {
      let month = this.currentDate.getMonth() - 1
      let year = this.currentDate.getFullYear()
      if (month == -1) {
        month = 11
        year--
      }
      this.updateCalendar(month, year)
    },

    updateCalendar(month, year) {
      this.calendarDays = []
      this.currentDate = new Date (year, month)
      this.currentMonth = this.calendarMonth[this.currentDate.getMonth()]
      this.currentYear = this.currentDate.getFullYear()
      this.createCalendar(this.currentDate)
    }
  },
  async beforeMount() {
    const store = useStore()
    // this.user.login = localStorage.userLogin
    this.user.email = await localStorage.email
    this.user.room = await localStorage.room

    this.currentDate = new Date()
    this.currentMonth = this.calendarMonth[this.currentDate.getMonth()]
    this.currentYear = this.currentDate.getFullYear()

    this.createCalendar(this.currentDate)

    // localStorage.removeItem('userEmail')
    // localStorage.removeItem('userRoom')
  }
}

</script>