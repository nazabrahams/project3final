
import { createStore } from 'vuex'
export default createStore({
  state: {
    about: null,
    projects: null,
    education: null,
    skills: null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state,payload){
      state.about = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    }
  },
  actions: {
    async getData({commit}){
      let fetchedData = await fetch('https://nazabrahams.github.io/project3-api/data.json')
      let data = await fetchedData.json()
      let {about,projects, education,skills, testimonials} = data
      commit('setAbout',about)
      commit('setProjects', projects)
      commit('setEducation', education)
      commit('setSkills', skills)
      commit('setTestimonials', testimonials)
    }
  },
  modules: {
  }
})