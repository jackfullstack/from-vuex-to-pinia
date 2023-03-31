import { defineStore } from 'pinia'

export const useEventStore = defineStore('EventStore', {  // useEventStore - naming convention that comes from the CompositionApi
    state() {                                            // state is a function that returns and object -> much like how the data()fn is used to manage state locally
        return {
            events: [],
            event: {},
        }
    },
    getter: {
        numberOfEvents() {                               // can be done with arrow function, but then state does need to be passed
            return this.events.length                    // numberOfEvents: state => state.events.length
        }
    },
    actions: {  
        fetchEvents() {                         
            return EventService.getEvents()     
              .then(response => {
                this.events = response.data             // pinia does not have mutations -> so can get rid of the commit()fn and use this. for updating state directly
              })
              .catch(error => {
                throw error
              })
          },
    }
}) 