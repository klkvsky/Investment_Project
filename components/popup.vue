<template>
  <div class="popup" :class="{ hidden: active}">
    <h2>Напишите нам</h2>
    <form>
      <div class="input__group">
        <label for="name">Ваше имя</label>

        <div class="input__group__field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
            ></path>
          </svg>
          <input id="name" type="text" placeholder="Имя" />
        </div>
      </div>

      <div class="input__group">
        <label for="mail">Ваша почта</label>

        <div class="input__group__field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"
            ></path>
          </svg>
          <input id="mail" type="mail" placeholder="Email" />
        </div>
      </div>
      <div class="input__group">
        <label for="about">Опишите вашу тему</label>

        <div class="input__group__field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1)"
          >
            <path
              d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"
            ></path>
          </svg>
          <input id="about" type="text" placeholder="Тема" />
        </div>
      </div>
      <div class="input__group">
        <label for="message">Ваше сообщение</label>

        <div class="input__group__field">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path><path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path></svg>
          <input id="message" type="text" placeholder="Сообщение" />
        </div>
        
      </div>
      <input type="submit" value="Отправить" />
      <button type="button" @click="$emit('togglePopup')">Отмена</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'

/* jshint expr: true */

export default Vue.extend({
    props: ['active'],
})
</script>

<style lang="scss">

.popup {
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.16);
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  

  width: 300px;


  &.hidden{
      bottom: -1000px;
      transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }

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

  h2 {
    color: #fff;
    background-color: rgb(82, 123, 255);
    width: 100%;
    text-align: center;
    padding: .5rem;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;

    button{
        background-color: rgb(201, 201, 201);
        color: #fff;
        width:  95%;
        border: none;
        font-size: 1rem;
        padding: .5rem;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
    }

    input[type=submit]{
        background-color: rgb(82, 123, 255);
        color: #fff;
        width:  95%;
        border: none;
        font-size: 1rem;
        padding: .5rem;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
    }

    .input__group {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #888;
      }

      &__field {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(226, 226, 226);
        padding: 0.4rem 0.5rem;
        border-radius: 3px;
        margin-top: 0.3rem;
        font-size: 1rem;

        svg {
          fill: #333 !important;
        }

        input {
          width: 100%;
          border: none;
          font-size: 1rem;
          font-weight: 500;

          &::placeholder {
            color: #999;
            
          }

          &:focus {
            outline: none;
            // border: 1px solid rgb(82, 123, 255);
            border: none;
          }
        }
      }
    }
  }
}
</style>
