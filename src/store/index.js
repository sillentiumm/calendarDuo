import { createStore } from 'vuex'
import { auth } from '../firebase'
import router from '../router/router';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getDatabase, ref, set, get, child, push, update, onValue } from 'firebase/database'

export default createStore({
  persist: {
    paths: ['user'],
  },
  state: () => ({
    user: {
      
    },
    currentRoomDate: {
      year: null,
      month: null,
      day: null
    },
    currentList: [],
    allMessages: []
}),
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    CLEAR_USER (state) {
      state.user = {
        email: ''
      }
    }
  },
  actions: {
    async login ({ commit }, details) {
      const db = getDatabase();
      const dbRef = ref(getDatabase());
      const { email, password } = details 
      try {
        await signInWithEmailAndPassword(auth, email, password)
        await get(child(dbRef, `users/${auth.currentUser.uid}`)).then((snapshot) => {
          const distanceRef = ref(db, 'users/' + auth.currentUser.uid)
          onValue(distanceRef, (snapshot) => {
            const data = snapshot.val()
            localStorage.setItem('auth', true);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            if(data.room) {
              localStorage.setItem('room', data.room)
            }
            router.push({ path: '/' })
          })
        }).catch((error) => {
          alert('error')
        });
      } 
      catch(error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found") 
            break
          case "auth/wrong-password":   
            alert("auth/wrong-password")
            break
          default:
            alert('error in login')  
        }
        return
      }
      // router.push({ path: '/' })
    },

    async register ({ commit }, details) {
      const { email, password, name } = details
      const db = getDatabase();

      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const referenceUser = ref(db, 'users/' + auth.currentUser.uid)
        set(referenceUser, {
          email: email,
          name: name
        })
        localStorage.setItem('auth', true);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.removeItem('room')
      }
      catch(error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use") 
            break
          case "auth/invalid-email":   
            alert("invalid-email")
            break
          case "auth/operation-not-allowed":
            alert("operation-not-allowed")  
            break
          case "auth/weak-password":
            alert("weak-password")
            break
          default:
            alert('error')  
        }
        return
      }
      router.push('/')
    },

    async logout ({ commit }) {
      await signOut(auth)
      localStorage.setItem('auth', false);
      localStorage.setItem('name', null);
      localStorage.setItem('email', null);
      localStorage.setItem('room', null);
      localStorage.removeItem('room')
      router.push({ path: '/login' })
    },

    async createRoom ({commit}, roomName) {
      const db = getDatabase();
      const dbRef = ref(getDatabase());

      get(child(dbRef, `rooms/${roomName}`)).then((snapshot) => {
        if (!snapshot.exists()) {
          const referenceRoom = ref(db, 'rooms/' + roomName)
          const referenceUser = ref(db, 'users/' + auth.currentUser.uid)
          set(referenceRoom, {
            user1: auth.currentUser.uid,
          }),
          
          update(referenceUser, {
            room: roomName
          })
          localStorage.setItem('room', roomName);
          alert('зарегана новая комната')
        } else {
          alert('Комната с таким именем уже существует')
          return false
        }
      }).catch((error) => {
        console.error(error);
      });
    },

    async joinRoom({commit}, roomName) {
      const db = getDatabase();
      const dbRef = ref(getDatabase());

      get(child(dbRef, `rooms/${roomName}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let dataRoom = snapshot.val()
          if(dataRoom.user1 && !dataRoom.user2) {
            const referenceRoom = ref(db, 'rooms/' + roomName)
            const referenceUser = ref(db, 'users/' + auth.currentUser.uid)
            const distanceRef = ref(db, 'users/' + auth.currentUser.uid)
            onValue(distanceRef, (snapshot) => {
              const data = snapshot.val()
              localStorage.setItem('room', data.room)
            })
            update(referenceRoom, {
              user2: auth.currentUser.uid
            })
            update(referenceUser, {
              room: roomName
            })
            localStorage.setItem('room', roomName);
            alert('вступил в комнату')
          } else {
            alert("В комнате уже максимум пользователей")
          }

        } else {
          alert('Нет комнаты с таким названием')
        }
      }).catch((error) => {
        console.error(error);
      });
      
    },

    // async changeName({commit}, name) {
    //   const db = getDatabase();
    //   const dbRef = ref(getDatabase());
    //   console.log(name)
    // },

    test4() {
      const db = getDatabase();
      const distanceRef = ref(db, 'users/' + auth.currentUser.uid)
      onValue(distanceRef, (snapshot) => {
        const data = snapshot.val()
      })
    },

    CalendarAddMessage({commit}, data) {
      let room = localStorage.room
      const db = getDatabase();
      const referenceMessage = ref(db, 'rooms/' + room + '/messages/' + data.date.year + '/' + data.date.month + '/' + data.date.day)
      const referenceAllMessage = ref(db, 'rooms/' + room + '/messages/all' )

      // console.log(data.name, ' ', data.date.year, ' ', data.data.data )

      if(room) {
        push(referenceMessage, {
          message: data.name + ': ' + data.data.data,
          checked: false
        })

        push(referenceAllMessage, {
          name: data.name,
          message: data.data.data,
          year: data.date.year,
          month: data.date.month,
          day: data.date.day,
        })
      }
    },

    onValueCurrentDate(detailsData) {
      let year = detailsData.state.currentRoomDate.year
      let month = detailsData.state.currentRoomDate.month
      let day = detailsData.state.currentRoomDate.day
      let room = localStorage.room
      const db = getDatabase();
      const distanceRef = ref(db, 'rooms/' + room + '/messages/' + year + '/' + month + '/' + day)

      onValue(distanceRef, (snapshot) => {
        this.state.currentList = []
        snapshot.forEach((childSnapshot) => {
          this.state.currentList.push(childSnapshot.val())
        })
      })
    },

    onValueCurrentRoom() {
      let room = localStorage.room
      const db = getDatabase();
      const distanceRef = ref(db, 'rooms/' + room + '/messages/all')

      onValue(distanceRef, (snapshot) => {
        this.state.allMessages = []
        snapshot.forEach((childSnapshot) => {
          this.state.allMessages.unshift(childSnapshot.val())
        })
        while (this.state.allMessages.length > 9) {
          this.state.allMessages.pop()
        }
      })
    },

    changeCkekbox({commit}, data) {
      let room = localStorage.room
      const db = getDatabase();
      const dbRef = ref(getDatabase());

      get(child(dbRef, `rooms/${room}/messages/${data.year}/${data.month}/${data.day}`)).then((snapshot) => {
        if (snapshot.exists()) {
          let allMessages = snapshot.val()
          let objName = Object.keys(allMessages)[data.index]
          allMessages[objName].checked = !allMessages[objName].checked

          const referenceChecked = ref(db, 'rooms/' + room + '/messages/' + data.year + '/' + data.month + '/' + data.day + '/' + objName)
          update(referenceChecked, {
            checked: allMessages[objName].checked
          })
        }
      }).catch((error) => {
        console.error(error);
      });
    }

  }
})