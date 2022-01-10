<template>
  <div class="landing">
    <div class="jumbo">
      <div class="jumbo__img">
        <div class="pattern-dots-md"></div>
        <!-- <img src="@/assets/jumbo.jpg" alt="" /> -->
      </div>

      <div class="jumbo__txt">
        <h1>
          Место встречи <br />
          инвестеров и бизнеса
        </h1>
        <p>Выберете из опций снизу и продолжите свой путь</p>
        <div class="jumbo__txt__btn">
          <NuxtLink :to="`investor`"> Инвестировать </NuxtLink>
          <NuxtLink :to="`worker`"> Найти инвестиции </NuxtLink>
        </div>
      </div>
    </div>

    <div class="postsRow centerLanding">
      <post-card-landing
        v-for="post in sortedPosts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <h1 style="margin-top: 3rem" class="centerLanding rowLanding">
      Возможности для проектов
    </h1>
    <div class="landing__why">
      <div class="landing__why__item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(0, 0, 0, 1)"
        >
          <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path>
          <path
            d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"
          ></path>
        </svg>
        <h4>Охват инвесторов</h4>
        <p>Проекты, размещаемые на сайте рассылаются по 17 инвестклубам</p>
      </div>
      <div class="landing__why__item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(0, 0, 0, 1)"
        >
          <path
            d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"
          ></path>
        </svg>
        <h4>Поможем с упаковкой</h4>
        <p>
          У нас вы можете заказать услуги по созданию инвестиционного пакета
        </p>
      </div>
      <div class="landing__why__item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: rgba(0, 0, 0, 1)"
        >
          <path
            d="M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3 0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1 0 .374 0 1 2 1 3.48 0 4 1.879 4 3 0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1 1.38 0 2-.585 2-1 0-.325 0-1-2-1z"
          ></path>
        </svg>
        <h4>Бесплатное размещение</h4>
        <p>Мы не берём денег за публикацию инвестпроекта</p>
      </div>
    </div>

    <div class="landing__new">
      <h1>Новые проекты на сайте:</h1>
      <div class="postsRow centerLanding">
        <post-card-new
          v-for="post in sortedPosts.slice(0, 3)"
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  computed: {
    posts() {
      return this.$store.state.posts
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts
      return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
})
</script>

<style lang="scss">
.centerLanding {
  max-width: 1200px;
  margin: 0 auto;
}

.rowLanding {
   @media (max-width: 767.98px) {
    text-align: center;
  }
}

.landing {
  padding: 0 4%;
  width: 100%;

  &__why {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    margin-top: 2rem;

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: #fff;
      border-radius: 18px;
      padding: 0.5rem 1rem;
      // height: 500px;
      // box-shadow: 2px 4px 12px rgba(0, 0, 0, .08),
      // -2px -4px 12px rgba(0, 0, 0, .08);
      // padding: .5rem;
      width: 380px;
      // height: 200px;
      // border-bottom: 1px solid #0f142c;
      position: relative;
      box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

      svg {
        height: 3rem;
        width: 3rem;
        margin-bottom: 0.8rem;
      }

      h4 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        padding-bottom: 0.5rem;
      }

      &:hover {
        transform: scale3d(1.01, 1.01, 1.01);
        box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        h4 {
          color: rgb(82, 123, 255);
        }

        svg {
          path {
            fill: rgb(82, 123, 255);
            transform: scale3d(1.1, 1.1, 1.1);
            transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          }
        }
      }
    }
  }

  &__new {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 5rem;

    h1 {
      text-align: left;
      font-size: 45px;
      line-height: 53px;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
  }

  @media (max-width: 767.98px) {
    padding: 0;

    &__why {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
    }

    &__new {
      max-width: 100%;

      h1{
        font-size: 30px;
        text-align: center;
      }
    }
  }
}
.jumbo {
  width: 100%;
  height: 50vh;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;

  &__img {
    // flex: 1;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    height: 30rem;
    margin-right: -4%;
    // margin-left: -4%;
    margin-left: 60%;

    div {
      height: 30rem;
      width: 100%;
      color: rgb(82, 123, 255);
    }

    // img {
    //   width: 100%;
    //   height: 15rem;
    //   border-bottom-right-radius: 50px;
    //   border-bottom-left-radius: 50px;
    //   object-fit: cover;
    //   z-index: -1;
    // }
  }

  &__txt {
    // flex: 0.6;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: -20rem;
    z-index: 100;
    // height: 25rem;
    // background-color: rgba(255, 255, 255, 0.274);
    // z-index: 100;
    // border-bottom-right-radius: 50px;
    // border-bottom-left-radius: 50px;
    // backdrop-filter: blur(10px);
    h1 {
      font-size: 45px;
      line-height: 53px;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    p {
      font-size: 20px;
      line-height: 23px;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    &__btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 4rem;

      a {
        background-color: rgb(82, 123, 255);
        // background-color: #fff;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.1rem;
        padding: 0.8rem 1.5rem;
        // height: 8rem;
        // width: 14rem;
        border-radius: 10px;
        box-shadow: rgba(82, 123, 255, 0.2) 0px 8px 24px;
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        &:hover {
          transform: scale3d(1.01, 1.01, 1.01);
          box-shadow: 2px 4px 16px rgba(82, 123, 255, 0.45);
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
        }
      }
    }
  }

  @media (max-width: 767.98px) {
    height: auto;

    &__img {
      height: 15rem;

      div {
        height: 15rem;
      }
    }

    &__txt {
      margin-top: -5rem;

      h1 {
        font-size: 30px;
        line-height: 40px;
      }

      p {
        font-size: 14px;
      }

      &__btn {
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        a {
          width: 100%;
        }
      }
    }
  }
}
</style>
