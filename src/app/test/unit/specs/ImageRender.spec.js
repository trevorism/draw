import Vue from 'vue'
import ImageRender from '@/components/ImageRender'

describe('ImageRender.vue', () => {
  it('should render props data', () => {
    const Constructor = Vue.extend(ImageRender)
    const imageRender = new Constructor({propsData: {textValue: 'hello'}}).$mount()
    console.log(imageRender.$el.textContent)
    expect(imageRender.$el.textContent).to.contains('hello')
  })
})
