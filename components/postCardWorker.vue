<template>
  <div v-if="post.acf.maincategory[0] == 'Инициатор'" class="card">
    <div class="card__image">
      <!-- <a :href="`investor/${post.slug}`"> -->
      <NuxtLink :to="post.slug">
        <img :src="post.acf.thumbnail" alt="" />
      </NuxtLink>
      <!-- <p>{{post.postImages.thumbnail.id}}</p> -->
    </div>
    <div class="card__body">
      <div class="card__body__description">
        <p v-for="tag in tags" :key="tag.id">
          <span v-if="post.tags.includes(tag.id)">
            {{ tag.name }}
          </span>
        </p>
      </div>
      <h2 class="card__body__tittle">
        <NuxtLink :to="post.slug">
        <!-- <a :href="`${post.slug}`"> -->
          {{ post.title.rendered }}
        </NuxtLink>
      </h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="card__body__text" v-html="post.acf.postdescription"></div>
      <div class="card__body__cta">
        <NuxtLink class="card__body__cta__price" :to="post.slug">
        <!-- <a class="card__body__cta__price" :href="`${post.slug}`"> -->
          <p>{{ post.acf.price }} ₽</p>
        </NuxtLink>
        <NuxtLink class="card__body__cta__link" :to="post.slug">
        <!-- <a class="card__body__cta__link" :href="`${post.slug}`"> -->
          <!-- <a :href="`${post.slug}`"> -->
          <svg
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
        </NuxtLink>
      </div>
    </div>
  </div>
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
