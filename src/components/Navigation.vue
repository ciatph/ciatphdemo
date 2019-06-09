<template lang="pug">
  div
    router-link(to="/home")
      a home
    span  |
    router-link(to="/about")
      a about |
    router-link(to="/info")
      a information
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
