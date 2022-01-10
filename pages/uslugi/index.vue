<template>
  <!-- <div class="posts"> -->
  <div class="mainPostsContainer">
    <div class="posts">
      <!-- <survey :survey="survey"> -->
      <!-- </survey> -->
      <h1 class="postsTittle">{{ valueMessage(181).title.rendered }}</h1>
      <!-- <p>{{tags}}</p> -->
      <!-- <p>{{investors}}</p> -->

      <div class="aboutPost">
        <div class="aboutPost__text">
          <article v-html="valueMessage(181).content.rendered"></article>
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
      if (id === 181) {
        return this.customPages.find((item) => item.id === id)
      }
    },
  },
}
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  text-align: left;
  margin: 1.5rem 0;
  width: 100% !important;
}


table td {
  padding: 15px;
}

table thead tr th {
  font-size: 0.8rem;
  padding: 1rem;
  background-color: rgb(82, 123, 255);
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #ffffff;

  &:first-child{
      border-top-left-radius: 18px !important;
  }

  &:last-child{
    border-top-right-radius: 18px !important;
  }
}


table tbody td {
  color: #333;
//   border: 1px solid #dddfe1;
}
table tbody tr {
 background-color: #ffffff; 
}

table tbody tr:nth-child(odd) {
  
  background-color: rgb(235, 239, 252);
}

table tr:last-child td:first-child {
    border-bottom-left-radius: 10px !important;
}

table tr:last-child td:last-child {
    border-bottom-right-radius: 10px !important;
}

table tr:first-child td:first-child {
    border-top-left-radius: 10px !important;
}

table tr:first-child td:last-child {
    border-top-right-radius: 10px !important;
}

</style>
