<template>
  <!-- below I am using the getter function numberOfEvents from the store -->
  <h1>{{ $store.getters.numberOfEvents }} Events for Good</h1> 
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from '../stores/EventStore'      // import useEventStore from EventStore

export default {
  components: {
    EventCard
  },
  setup() {
    const eventStore = useEventStore()                    // use setup() lifecycle hook to instantiate eventStore
    return {                                              // return it in an object so that it is exposed to rest of component
      eventStore                            
    }
  },
  created() {
    this.eventStore.fetchEvents.catch(error => {          // replace all instances of $store with eventStore to use pinia instd of vuex
      this.$router.push({                                 // also because pinia sets everything up as properties on the store, can get rid of 'dispatch' and call as normal function
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    events() {
      return this.eventStore.events   // getting the events from pinia instead of vuex-store -> can also use directly, similar to vuex, but a bit cleaner,
    }                                 // by replacing events with eventStore.events
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
