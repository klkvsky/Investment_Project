<template>
  <nav class="nav" :class="{ hidden: open }">
    <div class="nav__cont">
      <nuxt-link to="/">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
            ></path>
          </svg>
          <p>Главная</p>
        </span>
      </nuxt-link>
      <nuxt-link to="/worker">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"
            ></path>
            <path
              d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"
            ></path>
          </svg>
          <p>Инвесторы</p>
        </span>
      </nuxt-link>
      <nuxt-link to="/investor">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"
            ></path>
          </svg>
          <p>Проекты</p>
        </span>
      </nuxt-link>
      <nuxt-link to="/baseOfInvestors">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4V6zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4z"
            ></path>
            <path
              d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3z"
            ></path>
          </svg>
          <p>База Инвесторов</p>
        </span>
      </nuxt-link>
      <nuxt-link to="/about">
        <span>
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
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
          <p>О нас</p>
        </span>
      </nuxt-link>
      <nuxt-link to="/uslugi">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM4 8h16v4h-3v-2h-2v2H9v-2H7v2H4V8zm0 11v-5h3v2h2v-2h6v2h2v-2h3.001v5H4z"
            ></path>
          </svg>
          <p>Услуги</p>
        </span>
      </nuxt-link>
      <button class="togglePopup" @click="$emit('togglePopup')">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);"
          >
            <path
              d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z"
            ></path>
          </svg>
          <p>Связь с нами</p>
        </span>
      </button>
      <nuxt-link to="/survey">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>

          <p>Добавить Обьявление</p>
        </button>
      </nuxt-link>
      <button @click="$emit('togglenav')">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'

/* jshint expr: true */

export default Vue.extend({
  props: ['open'],
  methods: {
    to() {
      this.$router.go(-1)
    },
  },
})
</script>

<style lang="scss">
.nav {
  width: 15vw;
  // border-radius: 10px;
  // min-height: 44px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  // min-width: 1024px;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  background-color: #fff;
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.05) 0px 8px 24px;
  z-index: 100 !important;

  &__cont {
    // max-width: 1250px;
    // margin: 0 auto;
    // padding: 0 22px;
    // height: 5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    // justify-content: space-between;
    // display: flex;
    // grid-template-rows: 1fr 1fr;
    // grid-template-columns: 31% 69%;
    // grid-template-columns: 1fr;
    justify-content: flex-start;
    gap: 1rem;

    button {
      background-color: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        padding: 0.5rem;
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        svg,
        path {
          transition: 0.3s all ease-in-out;
        }

        &:hover {
          background-color: rgb(235, 239, 252);
          color: rgb(82, 123, 255);
          padding: 0.5rem;
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          border-radius: 5px;

          svg,
          path {
            fill: rgb(82, 123, 255);
            transition: 0.3s all ease-in-out;
          }
        }
      }
    }

    a, .togglePopup {
      width: 100%;

      &.nuxt-link-exact-active {
        background-color: rgb(235, 239, 252);
        color: rgb(82, 123, 255);
        border-radius: 5px;

        svg,
        path {
          fill: rgb(82, 123, 255);
        }
      }

      span,
      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.3rem;
        background-color: transparent;
        font-size: 0.7rem;
        font-weight: 500;
        cursor: pointer;
        text-transform: uppercase;
        padding: 0.5rem;
        color: #333333d0;
        width: 100%;
        transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

        p {
          max-width: 100%;
        }
        svg,
        path {
          width: 1rem;
          height: 1rem;
          fill: #333333d0;
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
        }

        &:hover {
          background-color: rgb(235, 239, 252);
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          color: rgb(82, 123, 255);
          padding: 0.5rem;
          border-radius: 5px;

          svg,
          path {
            fill: rgb(82, 123, 255);
            transform: scale3d(1.05, 1.05, 1.05);
            transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
          }
        }
      }
    }
  }

  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  &.hidden {
    width: 5vw;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

    .nav__cont {
      a, .togglePopup {
        span,
        button {
          justify-content: center;
          p {
            max-width: 0px;
            overflow: hidden;
          }

          svg {
            margin-right: -5px;
          }
        }
      }
    }
  }

  @media (max-width: 767.98px) {
    // flex-direction: column;
    // display: none;
    // min-width: unset;
    width: 100vw;
    margin: 0;
    top: unset !important;
    margin-top: unset !important;
    padding: 0.3rem !important;
    position: fixed !important;
    bottom: 0;
    text-align: center !important;
    height: 10vh;
    z-index: 100;

    &__cont {
      // max-width: 1250px;
      // margin: 0 auto;
      // padding: 0 22px;
      // height: 5rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      // justify-content: space-between;
      // display: flex;
      // grid-template-rows: 1fr 1fr;
      // grid-template-columns: 31% 69%;
      // grid-template-columns: 1fr;
      justify-content: center;
      gap: 1rem;

      button {
        display: none;
      }

      a {
        width: 100%;

        &:nth-last-child(1) {
          display: none;
        }

        span {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5vw;
          font-size: 3vw;
          text-align: center !important;
          font-weight: 500;
          text-transform: uppercase;
          padding: 0.5rem;
          color: #333333d0;
          width: 100%;

          p {
            max-width: unset !important;
          }

          svg,
          path {
            fill: #333333d0;
          }

          &:hover {
            background-color: rgb(235, 239, 252);
            color: rgb(82, 123, 255);
            padding: 0.5rem;
            border-radius: 5px;

            svg,
            path {
              fill: rgb(82, 123, 255);
            }
          }
        }
      }
    }

    &.hidden {
      width: 100vw;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

      .nav__cont {
        a {
          span,
          button {
            justify-content: center;
            p {
              max-width: auto;
              overflow: visible;
            }

            svg {
              margin-right: 0;
            }
          }

          &:nth-child(5) {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>
