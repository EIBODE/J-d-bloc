import { http } from '../helpers'

const authenticate = authenticate => {
  return http.post('/player', authenticate)
    .then(response => response.data)
}

const getPlayer = () => {
  const playerId = localStorage.getItem('token')
  return http.get(`/player/${playerId}`)
    .then(response => response.data)
}

export const playerService = {
  authenticate,
  getPlayer
}
