/* eslint-disable camelcase */

// const siteURL = "https://css-tricks.com"
// const siteURL = "http://localhost/headlessWordpress"
// const siteURL = "http://blacksj6.beget.tech"
const siteURL = "http://eksponentum.ru"

export const state = () => ({
  posts: [],
  tags: [],
  investors: [],
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updateInvestors: (state, investors) => {
    state.investors = investors
  },
  updateCustomPages: (state, customPages) => {
    state.customPages = customPages
  }
}

export const actions = {
  async getCustomPages({
    state,
    commit,
    dispatch
  }) {
    try {
      let customPages = await fetch(
        `${siteURL}/wp-json/wp/v2/pages?page=1&per_page=20&_embed=1`
      ).then(res => res.json())
      customPages = customPages
        .filter(el => el.status === "publish")
        .map(({
          id,
          slug,
          title,
          content,
          excerpt,
        }) => ({
          id,
          slug,
          title,
          content,
          excerpt,
        }))

      commit("updateCustomPages", customPages)
    } catch (err) {
      console.log(err)
    }
  },
  async getInvestors({
    state,
    commit,
    dispatch
  }) {
    try {
      let investors = await fetch(
        `${siteURL}/wp-json/wp/v2/investor?page=1&per_page=20&_embed=1`
      ).then(res => res.json())
      investors = investors
        .filter(el => el.status === "publish")
        .map(({
          id,
          slug,
          title,
          acf: {
            name,
            mail,
            photo,
            budget,
          },
        }) => ({
          id,
          slug,
          title,
          acf: {
            name,
            mail,
            photo,
            budget,
          },
        }))

      commit("updateInvestors", investors)
    } catch (err) {
      console.log(err)
    }
  },
  async getPosts({
    state,
    commit,
    dispatch
  }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          acf: {
            postdescription,
            maincategory,
            landingpost,
            thumbnail,
            price,
            projectstage,
            region,
            companyname,
            gallery_1,
            gallery_2,
            gallery_3,
            gallery_4,
            gallery_5,
            gallery_6,
            gallery_7,
            gallery_8,
            gallery_9,
            gallery_10,
            gallery_11,
            gallery_12,
            gallery_13,
            gallery_14,
            gallery_15,
          },
        }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
          acf: {
            postdescription,
            maincategory,
            landingpost,
            thumbnail,
            price,
            projectstage,
            region,
            companyname,
            gallery_1,
            gallery_2,
            gallery_3,
            gallery_4,
            gallery_5,
            gallery_6,
            gallery_7,
            gallery_8,
            gallery_9,
            gallery_10,
            gallery_11,
            gallery_12,
            gallery_13,
            gallery_14,
            gallery_15,
          },
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags({
    state,
    commit
  }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=40&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({
        id,
        name
      }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  }
}
