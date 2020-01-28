import Vue from 'vue'
import Layout from '@/components/Layout'

describe('ImageRender.vue', () => {
  it('should set current value text', () => {
    const Constructor = Vue.extend(Layout)
    const imageRender = new Constructor().$mount()
    imageRender.setImage('test string')
    expect(imageRender.currentValue).to.equal('test string')
  })
})
