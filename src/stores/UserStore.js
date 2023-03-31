import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {  // useUserStore -> naming convention form CompositionApi
    state: () => ({
        user: 'Ingaling King of the Dingalings'        // shorthand way - using arrowfunction for the state function.
    }),
    getters: {                                         // like computed properties -> use this. instead of having to pass state - has access to userStore  
        firstName() {
            return this.user.split(' ')[0]
        }
    }
})

