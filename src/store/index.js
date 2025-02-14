import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://caleb-okkers.github.io/this-is-us-api/data/'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    work: null,
    projects: null,
    testimonials: null,
    skills: null,
    hobbies: null,
    designSkills: null,
    softSkills: null,
    cardSkills: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, payload) {
      state.jobTitle = payload
    },
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setHobbies(state, payload) {
      state.hobbies = payload
    },
    setEducation(state,payload) {
      state.education = payload
    },
    setWork(state,payload) {
      state.work = payload
    },
    setProjects(state,payload) {
      state.projects = payload
    },
    setTestimonials(state,payload) {
      state.testimonials = payload
    },
    setSkills(state,payload) {
      state.skills = payload
    },
    setDesignSkills(state,payload) {
      state.designSkills = payload
    },
    setSoftSkills(state,payload) {
      state.softSkills = payload
    },
    setCardSkills(state,payload) {
      state.cardSkills = payload
    }
  },
  actions: {
    async getJobTitle(context){
      try {
        let {jobTitle} = (await axios.get(portfolioURL)).data
        context.commit('setJobTitle', jobTitle)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getAboutMe(context){
      try {
        let {aboutMe} =  (await axios.get(portfolioURL)).data
        
        context.commit('setAboutMe', aboutMe)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
      // let converted = await fetchedInfo.json()
      // console.log(converted.aboutMe);
      // context.commit('setAboutMe', converted.aboutMe)
    },
    async getHobbies(context){
      try {
        let {hobbies} = (await axios.get(portfolioURL)).data
        context.commit('setHobbies', hobbies)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getEducation(context){
      try {
        let {education} = (await axios.get(portfolioURL)).data
        context.commit('setEducation', education)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getWork(context){
      try {
        let {work} = (await axios.get(portfolioURL)).data
        context.commit('setWork', work)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSkills(context){
      try {
        let {skills} = (await axios.get(portfolioURL)).data
        context.commit('setSkills', skills )
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getProjects(context){
      try {
        let {projectsv2} = (await axios.get(portfolioURL)).data
        context.commit('setProjects', projectsv2)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getTestimonials(context){
      try {
        let {testimonials} = (await axios.get(portfolioURL)).data
        context.commit('setTestimonials', testimonials)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getDesignSkills(context){
      try {
        let {designSkills} = (await axios.get(portfolioURL)).data
        context.commit('setDesignSkills', designSkills)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSoftSkills(context){
      try {
        let {softSkills} = (await axios.get(portfolioURL)).data
        context.commit('setSoftSkills', softSkills)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getCardSkills(context){
      try {
        let {cardSkills} = (await axios.get(portfolioURL)).data
        context.commit('setCardSkills', cardSkills)
        
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    }
    
  },
  modules: {
  }
})

// import { createStore } from "vuex";
// import axios from "axios";
// import Swal from "sweetalert2";

// const portfolioURL = "https://caleb-okkers.github.io/this-is-us-api/data/";

// export default createStore({
//   state: {
//     memories: [],
//   },

//   mutations: {
//     SET_DATA(state, { key, value }) {
//       state[key] = value;
//     },
//   },

//   actions: {
//     async fetchData({ commit }, key) {
//       try {
//         const response = await axios.get(portfolioURL);
//         commit("SET_DATA", { key, value: response.data[key] || [] });
//       } catch (error) {
//         Swal.fire({
//           title: "Error",
//           text: `Failed to fetch ${key.replace(/([A-Z])/g, " $1")}`,
//           icon: "error",
//           timer: 2000,
//         });
//       }
//     },

//     async fetchMemories(context) {
//       return context.dispatch("fetchData", "memories");
//     },
//   },

//   getters: {
//     getState: (state) => (key) => state[key],
//     getYears: (state) => state.memories,
//     getMonths: (state) => (year) => {
//       const foundYear = state.memories.find((y) => y.year === year);
//       return foundYear ? foundYear.months : [];
//     },
//   },
// });



// import axios from "axios";

// export default {
//   namespaced: true,
//   state: {
//     memories: [],
//   },
//   mutations: {
//     SET_MEMORIES(state, data) {
//       state.memories = data;
//     },
//   },
//   actions: {
//     async fetchMemories({ commit }) {
//       try {
//         const response = await axios.get(
//           "https://caleb-okkers.github.io/this-is-us-api/index.json"
//         );
//         commit("SET_MEMORIES", response.data);
//       } catch (error) {
//         console.error("Error fetching memories:", error);
//       }
//     },
//   },
//   getters: {
//     getYears: (state) => state.memories,
//     getMonths: (state) => (year) => {
//       const foundYear = state.memories.find((y) => y.year === year);
//       return foundYear ? foundYear.months : [];
//     },
//   },
// };
