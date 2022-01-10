/* eslint-disable vue/require-prop-types */
<template>
  <NuxtLink :to="post.slug" class="checktoifempty">
    <div v-if="post.acf.landingpost == true" class="card__Landing">
      <div class="card__Landing__image">
        <!-- <a :href="`${post.slug}`"> -->
        <img :src="post.acf.thumbnail" alt="" />
        <!-- <p>{{post.postImages.thumbnail.id}}</p> -->
      </div>
      <div class="card__Landing__body">
        <h2 class="card__Landing__body__tittle">
          <!-- <a :href="`${post.slug}`"> -->
          {{ post.title.rendered }}
        </h2>

        <!-- <div class="card__Landing__body__description">
          <p v-for="tag in tags" :key="tag.id">
            <span v-if="post.tags.slice(0, 5).includes(tag.id)">
              {{ tag.name }}
            </span>
          </p>
        </div> -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="card__Landing__body__text" v-html="post.acf.postdescription"></div>
        <div class="card__Landing__body__cta">
          <!-- <a class="card__Landing__body__cta__price" :href="`${post.slug}`"> -->
          <p>{{ post.acf.price }} ₽</p>
          <!-- <NuxtLink class="card__Landing__body__cta__link" :to="post.slug"> -->
          <!-- <a class="card__Landing__body__cta__link" :href="`${post.slug}`"> -->
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
.checktoifempty{
  &:empty{
    display:none;
  }
}
</style>
