import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { Vue } from 'vue'

interface AppState {
}

export const state = (): AppState => ({})
export const mutations: MutationTree<AppState> = {}
export const getters: GetterTree<AppState, any> = {}

export const actions: ActionTree<AppState, any> = {
  async nuxtServerInit({ dispatch, commit }, { req, store }) {

  },
}
