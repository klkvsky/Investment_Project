<template>
  <div class="underNavbar">
    <v-btn text :ripple="false" class="back-wrapper" @click="to">
      <p>
        Назад
      </p>
    </v-btn>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default Vue.extend({
    methods: {
      to() {
        this.$router.go(-1);
      },
    }
  })

</script>


<style lang="scss">
  // .underNavbar {
  //   // background-color: rgba(51, 51, 51, 0.055);
  //   border-top: 1px solid #33333342;
  //   border-bottom: 1px solid #33333342;
  //   width: 100vw;
  //   height: 3.5rem;

  //   v-btn {
  //     display: flex;
  //     flex-direction: row;
  //     align-items: center;
  //     height: 3.5rem;
  //     max-width: 1250px;
  //     margin: 0 auto;

  //     p {
  //       background-color: rgba(51, 51, 51, 0.137);
  //       color: #111;
  //       font-size: .9rem;
  //       padding: .5rem 2rem;
  //       // border-radius: 100px;
  //       font-weight: 600;
  //       text-transform: uppercase;
  //       cursor: pointer;
  //     }
  //   }

  //   @media (max-width: 767.98px){
  //     height: 4.5rem;

  //     v-btn{
  //       height: 4.5rem;
  //       // margin: 0 5%;
  //       align-items: center;
  //       justify-content: center;

  //       p{
  //         width: 80%;
  //         // padding: .5rem 5rem;
  //         text-align: center;
  //       }
  //     }
  //   }
  // }

</style>
