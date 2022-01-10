<template>
  <div class="mainContainer">
    <TheNavbar />
    <ThebackButton />
    <main>
      <transition name="fade">
        <nuxt />
      </transition>
    </main>

  </div>
</template>


<script>
  import TheNavbar from '@/components/navbar.vue'
  import ThebackButton from '@/components/backButton.vue'
  export default {
    components: {
      TheNavbar,
      ThebackButton
    }
  }

</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #1d1d1f;

    a {
      text-decoration: none;
    }

    button {
      border: none
    }
  }

  body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


// .fade-enter-active,
// .fade-leave-active{
//   transition: opacity 10s;
// }

// .fade-enter,
// .fade-leave-to{
//   opacity: 0;
// }
</style>


