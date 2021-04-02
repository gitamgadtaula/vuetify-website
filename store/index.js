export const state = () => ({
  headerStyle: false,
  imageSrc:'',
  titleSrc:''
})

export const mutations = {
  setHeader(state, value) {
    state.headerStyle = value
  },
  setImage(state, value) {
    state.imageSrc = value
  },
  setTitle(state, value) {
    state.titleSrc = value
  },
}
