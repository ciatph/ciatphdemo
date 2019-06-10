<template lang="pug">
  div
    header-nav(id="navigationbar" ref="navigationbar")
    b-navbar(
      style="border-bottom: 2px solid #d1e0e0;"
      :class="{'affix': isActive}"
      toggleable="lg"
      type="light"
      ref="bnavbar")
        b-container
          // CIAT Logo
          a(href="#" class="navbar-brand" style="vertical-align: top;")
          img(class="logo-ciat" src="../../assets/logo_ciat_up.png" style="padding-top: 0; margin-top: 0;")
          // Collapsed Menu Button
          b-navbar-toggle(target="nav-collapse")
          // Menu Labels
          b-collapse(id="nav-collapse" is-nav style="margin: 8px 0px 8px 0px;")
            b-navbar-nav(class="ml-auto")
              // Home
              router-link(to="/home" tag="b-nav-item") Home
              // Documents
              b-nav-item-dropdown(text="Documents" style="float:left;")
                b-dropdown-item(href="https://sites.google.com/site/amiaciatproject/documents/CRVA%20Philippines%204%20Page%20%28002%29.pdf?attredirects=0&d=1" target="blank") Draft CRVA Factsheet
                b-dropdown-item(href="https://drive.google.com/drive/folders/0B9VxzJSCd9EwWXhLSzZjZ200Z1U") Final CBA Outputs of Regional Teams
                b-dropdown-item(href="https://sites.google.com/site/amiaciatproject/documents/Draft%20Philippines.pdf?attredirects=0&d=1") Key Insights from the CRA Country Profile
                b-dropdown-item(href="https://www.google.com/url?q=https%3A%2F%2Fcgspace.cgiar.org%2Fbitstream%2Fhandle%2F10568%2F82572%2FCRA_Profile_Philippines.pdf%3Fsequence%3D5%26isAllowed%3Dy&sa=D&sntz=1&usg=AFQjCNE8Hg69G-HVNr7yjXJpRsY2Sxyx2g") CRA Country Profile
                router-link(to="/documents" tag="b-dropdown-item") [view all]
              // CRVA Maps
              router-link(to="/maps" tag="b-nav-item") CRVA Maps
              // CBA Tool
              b-nav-item(href="http://cbatool.ciat.cgiar.org/") CBA Tool
              b-nav-item-dropdown(text="Links")
                b-dropdown-item(href="https://csa.guide/csa/practices" target="blank") CRA Compendium
                b-dropdown-item(href="http://blog.ciat.cgiar.org/mission-establish-thousands-of-resilient-agricultural-communities/") Blog
</template>

<script>
import HeaderNav from '@/components/templates/HeaderNav'

export default {
  name: 'NavigationBar',

  components: {
    HeaderNav
  },

  data () {
    return {
      isActive: false,
      currentClass: 'affix',
      lightBorder: '#d1e0e0',
      darkBorder: '#006622'
    }
  },

  methods: {
    handleScroll () {
      const els = document.getElementById('navigationbar')
      const elBottom = els.getBoundingClientRect().bottom
      if (elBottom <= 0 && !this.isActive) {
        this.isActive = true
        this.$refs.bnavbar.style.borderBottom = '2px solid ' + this.darkBorder
      } else if (elBottom > 0 && this.isActive) {
        this.isActive = false
        this.$refs.bnavbar.style.borderBottom = '2px solid ' + this.lightBorder
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
