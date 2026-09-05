import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

export function fetchTree(start = 1, end = 3) {
  return http.get('/tree', { params: { start, end } }).then((r) => r.data)
}

export function fetchPerson(id) {
  return http.get(`/person/${id}`).then((r) => r.data)
}
