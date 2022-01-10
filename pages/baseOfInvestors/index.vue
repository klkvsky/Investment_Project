<template>
  <!-- <div class="posts"> -->
  <div class="mainPostsContainer">
    <div class="posts">
      <!-- <survey :survey="survey"> -->
      <!-- </survey> -->
      <h1 class="postsTittle">База инвесторов</h1>
      <!-- <p>{{tags}}</p> -->
      <!-- <p>{{investors}}</p> -->
      <div class="investorsRow">
        <div
          class="investorsRow__item"
          v-for="investor in investors"
          :key="investor.id"
          :post="post"
        >
          <!-- <div class="investorsRow__item__photo">
            <img :src="investor.acf.photo" />
          </div> -->
          <div class="investorsRow__item__text">
            <h4>{{ investor.title.rendered }}</h4>
            <p>{{ investor.acf.name }}</p>
            <p class="investorsRow__item__text__link">
              Сферы инвестирования: <br />
              {{ investor.acf.mail }}
            </p>

            <p>Бюджет: <br />{{ investor.acf.budget }}</p>
            <p>ID: {{investor.id}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  methods: {},
  computed: {
    investors() {
      return this.$store.state.investors
    },
  },
  created() {
    this.$store.dispatch('getInvestors')
  },
}
</script>

<style lang="scss">
// .posts {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   width: 100%;
//   max-width: 1250px;
//   margin: 0 auto;

// }

// .postsTittle {
//   font-size: 4rem;
//   // font-family: Georgia, 'Times New Roman', Times, serif;
//   font-weight: 500;
//   width: 100%;
//   max-width: 1250px;
//   height: 10rem;
//   // background-color: #3333330e;
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-start;
//   // padding: 1rem;
//   padding-bottom: 1rem;
//   margin-bottom: 0;

//   @media (max-width: 767.98px) {
//     height: 13rem;
//     font-size: 11.5vw;
//     padding: 0 5%;
//     padding-bottom: 1rem;
//   }
// }

.investorsRow {
  display: flex;
  // grid-template-columns: repeat(auto-fit, 350px);
  // grid-template-rows: 1fr;
  // display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  justify-content: flex-start;
  justify-items: flex-start;
  gap: 1.5rem;
  width: 100%;

  &__item {
    // border: 1px solid #333;
    // border-bottom: 1px solid #333;
    // border-radius: 10px;
    // min-width: 350px;

    // display: grid;
    // grid-template-rows: 40% 60%;
    // grid-template-columns: 1fr;
    // gap: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 18px;
    // height: 500px;
    // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
    // -2px -4px 12px rgba(0, 0, 0, .08);
    // padding: .5rem;
    width: 350px;
    // height: 530px;
    margin-bottom: 2rem;
    // border-bottom: 1px solid #0f142c;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    padding: 1rem;

    &:hover {
      transform: scale3d(1.01, 1.01, 1.01);
      box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    }

    &__photo {
      img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 100px;
        margin-bottom: 1rem;
      }
    }

    &__text {
      h4 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 500;
        margin-bottom: 1rem;
      }

      &__link {
        color: #000;
        margin-bottom: 2rem !important;
      }

      p {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 767.98px) {
    padding: 0 4%;
    flex-wrap: wrap;
    margin-bottom: 15rem;

    &__item {
      min-width: 93vw !important;
    }
  }
}
</style>
