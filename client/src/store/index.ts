/**
 * Store created with composition API
 * Avoided using Pinia since the store is small and simple
 */ 
import type { Excuse } from '@/types/ExcusesAPI'

const apiBaseUrl = 'http://localhost:3000/api'

const state = {
  excuses: [] as Excuse[]
}

const methods = {
  fetchExcuses(): void {
    fetch(`${apiBaseUrl}/excuses`)
      .then(res => res.json())
      .then(res => {
        state.excuses = res.data
      })
      .catch(err => console.log(err))
  },

   getRandomExcuse(): Excuse {
    // get a random excuse from the state
    const randomIndex = Math.floor(Math.random() * state.excuses.length)
    const randomExcuse = state.excuses[randomIndex]
    return randomExcuse
  },

  addExcuse(excuse: Excuse): Promise<void> {
   return new Promise((resolve, reject) => {
      fetch(`${apiBaseUrl}/excuse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(excuse)
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.success) {
            reject(res.message)
          }

          // update the the excuse object to respect the type definition
          const updatedExcuse = {
            ...excuse, 
            _id: res._id,
            createdAt: res.createdAt,
            updatedAt: res.updatedAt,
            __v: res.__v
          }

          state.excuses.push(updatedExcuse)
          alert(res.message)
          resolve()
        })
        .catch(err => reject(err))
    })
  }
}

const getters = {
  excuses() {
    return state.excuses
  },
  randomExcuse() {
    return methods.getRandomExcuse()
  }
}

export default {
  state,
  methods,
  getters
}
