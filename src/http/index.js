import client from './client'

export default {
  getTodos () {
    return [
      { id: 1, name: 'One', color: '#64C4ED', items: [] },
      { id: 2, name: 'Two', color: '#FFBBCC', items: [] },
      { id: 3, name: 'Two', color: '#FFBBCC', items: [] }
    ]
  },
  createTodo () {},
  deleteTodo () {}
}
