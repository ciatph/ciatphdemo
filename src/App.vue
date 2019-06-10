<template lang="pug">
  div(id="app")
    header-navbar
    <router-view/>
    footer-view
</template>

<script>
import HeaderNavbar from '@/components/templates/NavigationBar'
import FooterView from '@/components/templates/Footer'

export default {
  name: 'App',

  components: {
    HeaderNavbar,
    FooterView
  }
}
</script>

<style>
  #app {
    background-color: #fff;
    width: 100%;
  }
</style>
