import type { Excuse } from '@/types/ExcusesAPI'
import type { ExcuseToCreate } from '@/types/ExcusesAPI'

export interface Store {
  state: {
    excuses: Excuse[]
  },
  methods: {
    fetchExcuses(): void,
    getRandomExcuse(): Excuse,
    addExcuse(excuse: ExcuseToCreate): Promise<void>
  },
  getters: {
    excuses(): Excuse[],
    randomExcuse(): Excuse
  }
}