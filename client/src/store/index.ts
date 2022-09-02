import type { Excuse } from '@/types/ExcusesAPI'


const apiBaseUrl = 'http://localhost:5000/api'

const state = {
  excuses: [] as Excuse[]
}

const methods = {
  async fetchExcuses(): Promise<void> {
    await fetch(`${apiBaseUrl}/excuses`)
      .then(res => res.json())
      .then(res => {
        state.excuses = res.data
        console.log('excuses', state.excuses)
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
          state.excuses.push(excuse)
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
