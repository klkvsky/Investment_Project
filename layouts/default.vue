<template>
  <div class="mainContainer">
    <TheNavbar :open="navOpen" @togglePopup="popupOpen = !popupOpen" @togglenav="navOpen = !navOpen"/>
    <main>
      <transition name="fade">
        <nuxt />
      </transition>
    </main>
    <Popup  :active="popupOpen" @togglePopup="popupOpen = !popupOpen" />
  </div>
</template>

<script>
import TheNavbar from '@/components/navbar.vue'
import Popup from '@/components/popup.vue'

export default {
  components: {
    TheNavbar,
    Popup,
  },
  data: () =>{
    return{
      navOpen: true,
      popupOpen: true,
    }
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #18143d;

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgb(245, 245, 247);
}

main{
  background-color: rgb(245, 245, 247);
}

.mainContainer{
  display: grid;
  grid-template-columns: 5% 95%;
  grid-template-rows: 1fr;
  gap: 0rem;

  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
  }
}


.fade-enter-active,
.fade-leave-active{
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>
