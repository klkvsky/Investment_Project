<template>
  <!-- <div class="posts"> -->
  <div class="mainPostsContainer">
    <div class="posts">
      <!-- <survey :survey="survey"> -->
      <!-- </survey> -->
      <h1 class="postsTittle">Найти Инвестора</h1>
      <div class="tagsContainer">
        <!-- <div class="tags-list">
          <p
            v-for="tag in tags"
            :key="tag.id"
            :class="[tag.id === selectedTag ? activeClass : 'notActive']"
            @click="updateTag(tag)"
          >
            <a>{{ tag.name }}</a>
            <span v-if="tag.id === selectedTag">✕</span>
          </p>
        </div> -->
      </div>
      <!-- <p>{{tags}}</p> -->
      <!-- <p>{{investors}}</p> -->
      <div class="postsRow">
        <post-card-worker v-for="post in sortedPosts" :key="post.slug" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  data() {
    return {
      selectedTag: null,
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    tags() {
      return this.$store.state.tags
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts
      return this.posts.filter((el) => el.tags.includes(this.selectedTag))
    },
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id
      } else {
        this.selectedTag = null
      }
    },
  },
}
</script>

<style lang="scss">
// .mainPostsContainer {
//   // display: grid;
//   // grid-template-columns: 20% 80%;
//   // gap: 1rem;
//   // padding: 0 7%;
//   // width: 100vw;
// }

// .posts {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   width: 100%;
//   max-width: 1250px;
//   margin: 0 auto;

//   .tagsContainer {
//     width: 100%;
//     margin-bottom: 1.5rem;

//     .tags-list {
//       display: flex;
//       flex-direction: row;
//       justify-content: flex-start;
//       align-items: flex-start;
//       flex-wrap: wrap;
//       overflow-x: scroll;
//       gap: 0.5rem;

//       @media (max-width: 767.98px) {
//         padding: 0 4%;
//       }

//       &::-webkit-scrollbar {
//         display: none;
//       }

//       p {
//         border: 1px solid #333;
//         background-color: #333;
//         color: #fff !important;
//         padding: 0.2rem 0.5rem;
//         border-radius: 100px;
//         cursor: pointer;
//         padding-top: 0;
//         white-space: nowrap;

//         transition: 0.2s all ease-in-out;

//         span,
//         a {
//           color: #fff;
//           text-transform: uppercase;
//           font-size: 0.6rem;
//           padding-top: 0;
//           transition: 0.2s all ease-in-out;
//         }

//         &.notActive {
//           background-color: #fff;
//           border: 1px solid #333;
//           color: #333;
//           transition: 0.2s all ease-in-out;

//           span,
//           a {
//             color: #333;
//             text-transform: uppercase;
//             font-size: 0.6rem;
//             padding-top: 0;
//             transition: 0.2s all ease-in-out;
//           }
//         }
//       }
//     }
//   }
// }

// .postsTittle {
//   font-size: 4rem;
//   font-family: Georgia, 'Times New Roman', Times, serif;
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

// .postsRow {
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 1fr;
//   // display: flex;
//   // flex-direction: row;
//   // flex-wrap: wrap;
//   justify-content: flex-start;
//   justify-items: flex-start;
//   gap: 1.5rem;
//   width: 100%;

//   @media (max-width: 767.98px) {
//     padding: 0 4%;
//   }
// }
</style>