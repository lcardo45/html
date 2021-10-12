<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    name: 'Banner1',
  data () {
      return {
        items: [
          {
            src: require('../assets/images/slide-carne-2.jpg'),
          },
          {
            src: require('../assets/images/slide-carne-1.jpg'),
          },
          {
            src: require('../assets/images/slide-carne-3.jpg'),
          },
          {
            src: require('../assets/images/carne-slide-1.jpg'),
          },
        ],
      }
    },
}
</script>

