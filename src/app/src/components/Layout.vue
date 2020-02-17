<template>
  <div class="container">
    <div class="section hero is-info">
      <div class="title">Trevorism Illustrator</div>
    </div>
    <section>
      <div class="columns">
        <div class="column is-half">
          <TextArea @text-value="setImage"></TextArea>
        </div>
        <div class="column is-half">
          <ImageRender :textValue="currentValue" ></ImageRender>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TextArea from './TextArea'
import ImageRender from './ImageRender'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {ImageRender, TextArea},
  data () {
    return {
      currentValue: ''
    }
  },
  methods: {
    setImage: function (text) {
      axios.post('api/image', text)
        .then((result) => {
          this.currentValue = result.data
        })
        .catch((msg) => {
          this.currentValue = 'Error: ' + msg
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.down{
  margin: 0px;
}
</style>
