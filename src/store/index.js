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
    } 
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
            localStorage.setItem('room', data.room)
            localStorage.setItem('email', email);
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
      console.log('true reg')
      // commit('SET_USER', auth.currentUser)
    },

    async logout ({ commit }) {
      await signOut(auth)
      localStorage.setItem('auth', false);
      localStorage.setItem('email', null);
      localStorage.setItem('room', null);
      localStorage.removeItem('room')
      router.push({ path: '/login' })
      console.log('logout')
    },

    async createRoom ({commit}, roomName) {
      const db = getDatabase();
      const dbRef = ref(getDatabase());

      get(child(dbRef, `rooms/${roomName}`)).then((snapshot) => {
        console.log(roomName)
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
    test4() {
      const db = getDatabase();
      const distanceRef = ref(db, 'users/' + auth.currentUser.uid)
      onValue(distanceRef, (snapshot) => {
        const data = snapshot.val()
        // updateDistance(postElement, data)
        console.log(data)
      })
    },
    CalendarAddMessage({commit}, data) {
      let room = localStorage.room
      const db = getDatabase();
      const referenceMessage = ref(db, 'rooms/' + room + '/' + data.date.year + '/' + data.date.month + '/' + data.date.day + '/')
        update(referenceMessage, {
          messages: data.data,
        })
    }
  }
})