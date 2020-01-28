import Vue from 'vue'
import TextArea from '@/components/TextArea'

describe('TextArea.vue', () => {
  it('should contain the text', () => {
    const Constructor = Vue.extend(TextArea)
    const textArea = new Constructor().$mount()
    textArea.textValue = 'a test string'
    expect(textArea.textValue).to.equal('a test string')
  })
})
