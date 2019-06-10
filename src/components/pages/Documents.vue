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
      tnPath: '../../assets/images/thumbnails/',
      thumbnail: 'http://placehold.it/500x325.png',
      thumbnailData: [
        {
          title: 'Document',
          description: 'Draft CRVA Factsheet',
          img: 'th-crva-factsheet',
          link: 'https://sites.google.com/site/amiaciatproject/documents/CRVA%20Philippines%204%20Page%20%28002%29.pdf?attredirects=0&d=1'
        },
        {
          title: 'Document',
          description: 'Final CBA Outputs of Regional Teams',
          img: 'th-crva-output',
          link: 'https://drive.google.com/drive/folders/0B9VxzJSCd9EwWXhLSzZjZ200Z1U'
        },
        {
          title: 'Document',
          description: 'Key Insights from the CRA Country Profile',
          img: 'th-key-insights',
          link: 'https://sites.google.com/site/amiaciatproject/documents/Draft%20Philippines.pdf?attredirects=0&d=1'
        },
        {
          title: 'Document',
          description: 'CRA Country Profile',
          img: 'th-country-profile',
          link: 'https://www.google.com/url?q=https%3A%2F%2Fcgspace.cgiar.org%2Fbitstream%2Fhandle%2F10568%2F82572%2FCRA_Profile_Philippines.pdf%3Fsequence%3D5%26isAllowed%3Dy&sa=D&sntz=1&usg=AFQjCNE8Hg69G-HVNr7yjXJpRsY2Sxyx2g'
        }
      ]
    }
  }
}
</script>
