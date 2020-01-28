<template>
  <b-field label="Image">
    <div class="borderTitle">
      {{textValue}}
    </div>
  </b-field>
</template>

<script>
export default {
  name: 'ImageRender',
  props: ['textValue'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .borderTitle{
    border: black 1px solid;
    height: 620px;
  }
</style>
