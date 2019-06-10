<template lang="pug">
  b-container(fluid class="container-fluid-custom bg-greylight")
    b-container(class="text-center")
      h2 Documents
      h4 Downloadable documents of our outputs

      b-row(class="text-center thumbnail-container")
        div(
          class="col-lg-3 col-sm-6 mb-4"
          v-for="item in thumbnailData")
          div(class="card h-100 thumbnail")
            img(:src="require(`@/assets/thumbnails/${item.img}.png`)"
            class="card-img-top" alt="Image")
            div(class="card-body")
              h4(class="card-title") {{ item.title }}
              p(class="card-text") {{ item.description }}
            div(class="card-footer")
              b-button(:href="item.link" variant="primary") Read More
</template>

<script>
export default {
  name: 'Documents',
  data () {
    return {
      thumbnailData: null
    }
  },

  created () {
    this.$http.get('/static/data/thumbnails-documents.json')
      .then((result) => {
        this.thumbnailData = result.data
      })
      .catch((error) => {
        console.log('error! ' + error)
      })
  }
}
</script>
