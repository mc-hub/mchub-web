import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { Vue } from 'vue'

interface ServerManagerState {
}

export const state = (): ServerManagerState => ({})
export const mutations: MutationTree<ServerManagerState> = {}
export const getters: GetterTree<ServerManagerState, any> = {}

export const actions: ActionTree<ServerManagerState, any> = {
  async createServer({ commit }) {
    const payload = await this.$axios.$get(`/api/v1/server/create`)
  },

  async nuxtServerInit({ dispatch, commit }, { req, store }) {

  },
}
