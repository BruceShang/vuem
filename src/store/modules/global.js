const UPDATE_TITLE = 'UPDATE_TITLE'

const initState = {
  title: '',
}

const actions = {
  // 更换title
  updateTitle({ commit }, data) {
    commit(UPDATE_TITLE, data)
  },
}
const mutations = {
  [UPDATE_TITLE](state, data) {
    state.title = data
    global.document.title = data
  },
}

export default {
  namespaced: true,
  state: initState,
  mutations,
  actions,
}
