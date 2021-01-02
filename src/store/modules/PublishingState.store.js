export const namespaced = true

export const state = {
  publishingStateList: [
    {
      value: 'online',
      name: 'Öffentlich',
      color: '#28a745'
    },
    {
      value: 'review',
      name: 'in Review',
      color: '#F33D88'
    },
    {
      value: 'draft',
      name: 'Entwurf',
      color: '#6c757d'
    }
  ]
}

export const getters = {
  getList: (state) => {
    return state.publishingStateList
  },
  getSelected: (state) => (value) => {
    return state.publishingStateList.find(publishingState => publishingState.value === value)
  }
}
