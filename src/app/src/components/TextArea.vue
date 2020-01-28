<template>
  <div>
    <b-field label="Message">
      <b-input v-model="textValue" size="lg" maxlength="1000" rows="25"
               type="textarea" @keyup.native.space="spaceBar" @keyup.native.enter="spaceBar"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  data () {
    return {
      textValue: ''
    }
  },
  methods: {
    spaceBar: function () {
      this.$emit('text-value', this.textValue)
    }
  }
}
</script>

<style scoped>

</style>
