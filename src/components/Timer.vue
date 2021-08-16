<template lang="html">
  <div class="timer">

    <!-- timer icon -->
    <img src="images/timer.png" />

    <!-- timer label -->
    <label class="time">
    {{ time.hours }}:{{ time.minutes }}:{{ time.seconds }}
    </label>

  </div>
</template>

<script>

export default {
  
  name: "Timer",

  props: {
    time: Object
  }
  
} 
</script>
