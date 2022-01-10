/* eslint-disable vue/require-prop-types */
<template>
  <NuxtLink :to="post.slug">
    <div v-if="post.acf.maincategory[0] == 'Инвестор'" class="card">
      <div class="card__image">
        <!-- <a :href="`${post.slug}`"> -->
        <img :src="post.acf.thumbnail" alt="" />
        <!-- <p>{{post.postImages.thumbnail.id}}</p> -->
      </div>
      <div class="card__body">
        <h2 class="card__body__tittle">
          <!-- <a :href="`${post.slug}`"> -->
          {{ post.title.rendered }}
        </h2>
        <div class="card__body__description">
          <p v-for="tag in tags" :key="tag.id">
            <span v-if="post.tags.slice(0, 3).includes(tag.id)">
              {{ tag.name }}
            </span>
          </p>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="card__body__text" v-html="post.acf.postdescription"></div>
        <div class="card__body__cta">
          <!-- <a class="card__body__cta__price" :href="`${post.slug}`"> -->
          <p>{{ post.acf.price }} ₽</p>
          <!-- <NuxtLink class="card__body__cta__link" :to="post.slug"> -->
          <!-- <a class="card__body__cta__link" :href="`${post.slug}`"> -->
          <!-- <a :href="`${post.slug}`"> -->
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M4 12h16"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 5l7 7l-7 7"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </NuxtLink> -->
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  // eslint-disable-next-line vue/require-prop-types
  props: ['post'],
  computed: {
    tags() {
      return this.$store.state.tags
    },
  },
})
</script>

<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 18px;
  // height: 500px;
  // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
  // -2px -4px 12px rgba(0, 0, 0, .08);
  // padding: .5rem;
  width: 380px;
  height: 590px;
  margin-bottom: 2rem;
  // border-bottom: 1px solid #0f142c;
  position: relative;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

    // .card__image {
    //   img {
    //     transform: scale3d(1.005, 1.005, 1.005);
    //     box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.1);
    //     transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    //   }
    // }
  }

  // &::after{
  //   content: "";
  //   position: absolute;
  //   top: 5%;
  //   left: 103%;
  //   height: 90%;
  //   width: 1px;
  //   border-right: 1px solid #3333332f;
  // }

  &__image {
    flex: 0.5;
    height: 250px;
    margin-bottom: 0rem;
    // border-top-left-radius: 18px;
    // border-top-right-radius: 18px;
    padding: .5rem;

    img {
      width: 100%;
      height: calc(250px - .8rem);
      object-fit: cover;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
      // border-radius: 5px;
      // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
      // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      // box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
    }
  }

  &__body {
    padding: 0.5rem 0.9rem;
    // padding-top: 0;
    flex: 1;
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: .6fr .2fr 1fr .5fr;

    &__description {
      margin-bottom: 0.4rem;
      // min-height: 1rem;
      // min-height: 42px !important;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.5rem;
      // min-height: 4.5rem;

      p {
        // margin-left: -.2rem;

        &:empty {
          display: none;
          width: 0;
          height: 0;
        }

        span {
          background-color: #0f142c;
          // background-color: #333333;
          font-weight: 400;
          border-radius: 5px;
          color: #fff;
          opacity: 0.8;
          white-space: nowrap;
          text-transform: uppercase;
          font-size: 0.5rem !important;
          padding: 0.3rem 0.3rem;
        }
      }
    }

    &__tittle {
      font-size: 1.1rem;
      // font-family: Georgia, 'Times New Roman', Times, serif;
      line-height: 1.14286;
      min-height: 2.4rem;
      font-weight: 600;
      letter-spacing: 0.007em;
      margin-bottom: 10px;
    }

    &__text {
      font-size: 14px;
      line-height: 1.23536;
      font-weight: 400 !important;
      letter-spacing: -0.022em;
      margin-top: 10px;
      // margin-top: 0;
    }

    &__cta {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;

      // &__price {
        p {
          font-weight: 600;
          font-size: 1.5rem;
          color: #0f142c;
        }
      // }

      &__link {
        // background-color: #A8C847;
        border: 2px solid #333333;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100px;
        padding: 0.5rem;
      }
    }
  }

  @media (max-width: 767.98px) {
    width: 94vw;
    height: auto;

    &__image {
      height: 250px;
    }

    &__body {
      // grid-template-rows: 0.1fr 0.8fr 0.5fr 0.1fr;
      display: flex;
      flex-direction: column;
      gap: .5rem;

      &__description{
        height: auto !important;
        margin-bottom: 0;
      }
    }
  }
}
</style>
