<template>
  <div class="container">
    <div class="underNavbar">
      <v-btn text :ripple="false" class="back-wrapper" @click="to">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
      </v-btn>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div v-if="post" class="swiper-slide">
          <img :src="post.acf.thumbnail" alt />
        </div>
        <div v-if="post && post.acf.gallery_1 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_1.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_2 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_2.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_3 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_3.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_4 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_4.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_5 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_5.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_6 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_6.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_7 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_7.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_8 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_8.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_9 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_9.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_10 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_10.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_11 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_11.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_12 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_12.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_13 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_13.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_14 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_14.url" alt />
        </div>
        <div v-if="post && post.acf.gallery_15 != ''" class="swiper-slide">
          <img :src="post.acf.gallery_15.url" alt />
        </div>
      </div>
      <div class="swiper-navigation">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="postContent">
      <div v-if="post" class="postContent__title">
        {{ post.title.rendered }} <small> {{ post.date | formatDate }} </small>
      </div>
      <div class="postContent__about">
        <div class="postContent__about__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
            ></path>
            <path d="M13 7h-2v6h6v-2h-4z"></path>
          </svg>
          <h4>Стадия Проекта</h4>
          <p v-if="post">{{ post.acf.projectstage }}</p>
        </div>
        <div class="postContent__about__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2z"
            ></path>
            <path
              d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"
            ></path>
          </svg>
          <h4>Регион</h4>
          <p v-if="post">{{ post.acf.region }}</p>
        </div>
        <div class="postContent__about__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <circle cx="12" cy="4" r="2"></circle>
            <path
              d="M15 7H9a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"
            ></path>
          </svg>
          <h4>Представитель</h4>
          <p v-if="post">{{ post.acf.companyname }}</p>
        </div>
        <div class="postContent__about__item" @click="openPopup()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="m2.6 13.083 3.452 1.511L16 9.167l-6 7 8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z"
            ></path>
          </svg>
          <h4>Написать Представителю</h4>
        </div>
      </div>
      <div v-if="post" class="postContent__tags">
        <p v-for="tag in tags" :key="tag.id">
          <span v-if="post.tags.includes(tag.id)">{{ tag.name }}</span>
        </p>
      </div>

      <div class="postContent__txt">
        <h4>Описание Проекта:</h4>

        <article
          v-if="post"
          class="postContent__left__text"
          v-html="post.content.rendered"
        ></article>
      </div>
    </div>

    <div class="cont__popup" :class="{ open: isActive }">
      <div class="popup">
        <div class="popup__logo">
          <img src="@/assets/logo.png" alt />
        </div>
        <h2>Написать представителю</h2>
        <p>Составьте обращение для отправки к представителю</p>

        <form action="@/order.php" class="popup__form">
          <input type="text" required placeholder="Имя*" />
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            pattern="[+]{1}[0-9]{11,14}"
            placeholder="Номер Телефона*"
          />
          <input
            id="mail"
            type="email"
            name="mail"
            required
            placeholder="Почта*"
          />
          <!-- <input type="text" name="message" id="message" value=""> -->
          <textarea id="message" name="message" cols="30" rows="10">
Здравствуйте, Представитель! Пожалуйста, вышлите подробности на почту. Спасибо
            </textarea
          >
          <div class="popup__form__sumbit">
            <button @click="openPopup()">Нет, спасибо</button>
            <input type="submit" value="Отправить" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('MM.DD.YYYY')
  }
})

export default Vue.extend({
  // props: ['post'],
  layout: 'default',
  async asyncData({ store, params }) {
    await store.dispatch('posts/getPost', params.slug)
  },
  data() {
    return {
      slug: this.$route.params.slug,
      isActive: false,

      swiperOption: {
        // pagination: {
        //   el: '.swiper-pagination'
        // },
        // slidesPerView: 2,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: true,
        slidesPerGroup: 1,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    post() {
      return this.posts.find((el) => el.slug === this.slug)
    },
    tags() {
      return this.$store.state.tags
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  mounted() {
    // console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(0, 1000, false)

    setTimeout(() => {
      this.display = false
    }, 3500)
  },
  methods: {
    openPopup() {
      this.isActive = !this.isActive
    },
    to() {
      this.$router.go(-1)
    },
  },
})
</script>

<style lang="scss">
.underNavbar {
  // background-color: rgba(51, 51, 51, 0.055);
  // border-top: 1px solid #33333342;
  // border-bottom: 1px solid #33333342;
  // width: 100vw;
  z-index: 1000;
  // height: 3.5rem;

  v-btn {
    position: fixed;
    bottom: 41.5%;
    left: 13%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
      background-color: rgba(51, 51, 51, 0.137);
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

    height: 3rem;
      width: 3rem;
      
      border-radius: 100px;
      cursor: pointer;

      svg,path{
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
      }

      &:hover{
        background-color: rgb(82, 123, 255);
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        svg,path{
          fill: #ffffff;
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
        }
      }

    p {
      color: #111;
      font-size: 0.9rem;
      padding: 0.5rem 2rem;
      
      // border-radius: 100px;
      font-weight: 600;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  @media (max-width: 767.98px) {
  }
}

.container {
  width: 95vw;
  overflow-x: hidden;

  @media (max-width: 767.98px) {
    margin-left: 0;
    margin-bottom: 5rem;
  }
}

.cont__popup {
  width: 100vw;
  height: 100vh;
  overflow-y: hidden !important;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1000;
  transition: 0.3s all ease-in-out;

  &.open {
    opacity: 1;
    transition: 0.3s all ease-in-out;
    overflow-y: hidden !important;
    z-index: 10;

    .popup {
      transition: 0.5s all ease-in-out;
      transform: translateY(0);
      z-index: 1000 !important;
      overflow-y: hidden !important;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.479);

  .popup {
    width: 28rem;
    height: 35rem;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
    z-index: -1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transform: translateY(-150%);
    transition: 0.5s all ease-in-out;

    &__logo {
      padding-top: 0.5rem;

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-top: 1rem;
      margin-bottom: 0.7rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      width: 80%;
      text-align: center;
      opacity: 0.7;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      width: 80%;
      margin-top: 1rem;

      input,
      textarea {
        padding: 0.3rem 0.7rem;
        font-size: 1rem;
        width: 100%;
        color: #333;
        border: 1px solid #3333331c;

        &::placeholder {
          color: #3333337c;
        }

        &:focus {
          border: 1px solid #33333373;
          outline: none;
        }
      }

      #message {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 0.5rem;
        height: 7rem !important;
        word-break: break-word;
      }

      &__sumbit {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;

        button,
        input {
          width: 100%;
          padding: 0.4rem 0.7rem;
          font-size: 1.1rem;
          width: 100%;
          color: #333;
          background-color: #fff;
          border: 1px solid #333;
          text-transform: uppercase;
          cursor: pointer;
        }

        button {
          opacity: 0.5;
        }

        input {
          background-color: #333;
          color: #fff;
        }
      }
    }
  }
}

.swiper-wrapper {
  width: 100vw;
  margin-top: 1rem;
  min-height: 25rem;

  .swiper-slide {
    width: 50rem;
    margin: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50rem;
      // border-radius: 20px;
      height: 25rem;
      object-fit: cover;
    }

    @media (max-width: 767.98px) {
      width: 90vw;

      img {
        width: 90vw;
        height: 12rem;
      }
    }
  }

  @media (max-width: 767.98px) {
    min-height: unset;
  }
}

.swiper-button-prev {
  left: 50px !important;
  background-color: #333 !important;
  opacity: 0.6;
  transition: 0.5s all ease-in-out;
  color: #fff !important;
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 100px !important;

  &:hover {
    opacity: 1;
    transition: 0.5s all ease-in-out;
  }

  &::after {
    font-size: 1.2rem !important;
    margin-left: -5px !important;
  }

  @media (max-width: 767.98px) {
    left: 10px !important;
    width: 2rem;
    height: 2rem;

    &::after {
      font-size: 0.8rem;
      margin-left: -3px;
    }
  }
}

.swiper-button-next {
  right: 50px !important;
  background-color: #333 !important;
  color: #fff !important;
  width: 3rem !important;
  height: 3rem !important;
  border-radius: 100px !important;

  opacity: 0.6;
  transition: 0.5s all ease-in-out;

  &:hover {
    opacity: 1;
    transition: 0.5s all ease-in-out;
  }

  &::after {
    font-size: 1.2rem !important;
    margin-right: -5px !important;
  }

  @media (max-width: 767.98px) {
    right: 10px !important;
    width: 2rem;
    height: 2rem;

    &::after {
      font-size: 0.8rem;
      margin-right: -3px;
    }
  }
}

.swiper-pagination {
  // background-color: red;
  // z-index: 100;
  span {
    background: #fff;
  }
}

.postContent {
  display: flex;
  flex-direction: column;
  margin: 0 15%;

  &__title {
    text-align: left;
    font-size: 40px;
    line-height: 53px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    width: 80%;

    small {
      font-size: 14px;
    }
  }

  &__about {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #fff;
      border-radius: 18px;
      padding: 0.5rem 1rem;
      // height: 500px;
      // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
      // -2px -4px 12px rgba(0, 0, 0, .08);
      // padding: .5rem;
      width: 250px;
      // height: 200px;
      // border-bottom: 1px solid #0f142c;
      position: relative;
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

      svg {
        height: 2rem;
        width: 2rem;
        margin-bottom: 0.8rem;
        margin-top: 0.2rem;
      }

      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        padding-bottom: 0.5rem;
      }

      &:nth-last-child(1) {
        align-items: center;
        text-align: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        svg,
        path {
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          margin-top: 0;
        }

        &:hover {
          background-color: rgb(82, 123, 255);
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          h4 {
            color: #ffffff;
            transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          }

          svg,
          path {
            fill: #ffffff;
            transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          }
        }
      }
    }
  }

  &__tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: rgba(82, 123, 255, 0.8);
      border-radius: 18px;
      padding: 0.5rem 1rem;
      // height: 500px;
      // height: 3.2rem;
      // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
      // -2px -4px 12px rgba(0, 0, 0, .08);
      // padding: .5rem;
      // width: 250px;
      // height: 200px;
      // border-bottom: 1px solid #0f142c;
      position: relative;
      box-shadow: rgba(82, 123, 255, 0.1) 0px 8px 24px;

      &:empty {
        display: none;
      }

      span {
        color: #fff;
      }
    }
  }

  &__txt {
    background-color: #ffffff;
    margin: 1.5rem 0;
    border-radius: 18px;
    max-width: 1050px;
    padding: 0.5rem 1rem;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

    h4{
      font-size: 35px;
      line-height: 53px;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    article{
      line-height: 23px;
      padding-bottom: 1rem;
    }
  }
}
</style>
