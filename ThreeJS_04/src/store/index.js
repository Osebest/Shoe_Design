import {proxy} from 'valtio'

const state = proxy({
  intro: true,
  color: '#764e4e',
  isFullTexture: false,
  fullDecal: '/shoe-texture.webp',
  shoe: 1,
  isMetallic: false,
  isWireframe: false,
  showTooltip: false,
  tooltip: 'Hello, world sfnsknsd dsbsjbsd'
})

export default state