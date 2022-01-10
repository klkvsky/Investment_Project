<template>
  <!-- <div class="posts"> -->
  <div class="mainPostsContainer">
    <div class="posts">
      <!-- <survey :survey="survey"> -->
      <!-- </survey> -->
      <h1 class="postsTittle">{{ valueMessage(173).title.rendered }}</h1>
      <!-- <p>{{tags}}</p> -->
      <!-- <p>{{investors}}</p> -->

      
      
      <div class="aboutPost">
          <div class="aboutPost__text">
            <article v-html="valueMessage(173).content.rendered"></article>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import Vue from 'vue'

export default {
  computed: {
    customPages() {
      return this.$store.state.customPages
    },
  },
  created() {
    this.$store.dispatch('getCustomPages')
  },
  methods: {
    valueMessage(id) {
      if (id === 173) {
        return this.customPages.find((item) => item.id === id)
      }
    },
  },
}
</script>

<style lang="scss">

.aboutPost{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    background-color: #fff;
    border-radius: 18px;
    // height: 500px;
    // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
    // -2px -4px 12px rgba(0, 0, 0, .08);
    // padding: .5rem;
    width: 100%;
    // height: 530px;
    margin-bottom: 2rem;
    // border-bottom: 1px solid #0f142c;
    position: relative;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    padding: 1rem;
    padding-bottom: 2rem;


    &__text {
      h2 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 500;
        margin-bottom: 1rem;
      }

      p {
        margin-top: 1rem;
      }
    }
}

.investorsRow {

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
