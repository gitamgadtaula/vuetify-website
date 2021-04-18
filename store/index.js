export const state = () => ({
  headerStyle: false,
  imageSrc:'',
  titleSrc:'',
  smallText:true,
  description:'',
  logoImage: false,
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
  setSmallText(state, value) {
    state.smallText = value
  },
  setDescription(state, value){
    state.description = value
  },
  setLogoImage(state, value) {
    state.logoImage=value;
  }
}
