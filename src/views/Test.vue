<template>
 <div id="coba">
  <h1>Pusher Test</h1>
  <p>
   Publish an event to channel
   <code>my-channel</code>
   with event name
   <code>my-event</code>; it will appear below:
  </p>
  <ul>
   <li v-for="(message, apem) in messages" :key="apem">{{ message }}</li>
  </ul>
  <button class="button is-success is-light" @click="subscribe">Connect</button>
 </div>
</template>
<script>

Pusher.logToConsole = true;

// var pusher = new Pusher('ebfe3f8ff45ad9c3ad4c', {
//   cluster: 'ap1',
//   forceTLS: true
// });

// var channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function (data) {
//   store.state.pusherMessages.push(JSON.stringify(data));
// });


export default {
 name: 'coba',
 data() {
  return { messages: '', }
 },


 // created() {

 //  this.subscribe()
 // },
 methods: {
  subscribe() {

   let pusher = new Pusher('ebfe3f8ff45ad9c3ad4c', {
    cluster: 'ap1',
    forceTLS: true
   })
   let channel = pusher.subscribe('channel')

   channel.bind('event', function (data) {
    this.messages.push(JSON.stringify(data))
    console.log(JSON.stringify(data))
   })
  }

 }

}
</script>