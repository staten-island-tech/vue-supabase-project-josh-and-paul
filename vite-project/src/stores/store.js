<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
      userList: [],
      // for data that is not yet loaded
      user: null ,
    }
  },
})

/* export const useUserStore = defineStore('user', {
    state: () => {
      return {
        userList: [],
        user: null ,
      }
    },
  }) */
=======
import { ref } from 'vue'
>>>>>>> parent of 1426c15 (5/28)
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
      userList: [],
      // for data that is not yet loaded
      user: null ,
    }
  },
})
<<<<<<< HEAD

/* export const useUserStore = defineStore('user', {
    state: () => {
      return {
        userList: [],
        user: null ,
      }
    },
  }) */
=======
import { ref } from 'vue'
>>>>>>> parent of 1426c15 (5/28)
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
      userList: [],
      // for data that is not yet loaded
      user: null ,
    }
  },
})
<<<<<<< HEAD

/* export const useUserStore = defineStore('user', {
    state: () => {
      return {
        userList: [],
        user: null ,
      }
    },
  }) */
=======
>>>>>>> Stashed changes
>>>>>>> parent of 1426c15 (5/28)
=======
>>>>>>> Stashed changes
>>>>>>> parent of 1426c15 (5/28)
