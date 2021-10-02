import { http } from '../helpers'

const createMeeting = () => {
  const playerId = localStorage.getItem('token')
  return http.post('/meeting', { player: playerId })
    .then(response => response.data)
}

const joinMeeting = meetingIdentifier => {
  return http.get(`/meeting/${meetingIdentifier}`, { meetingIdentifier })
    .then(response => response.data)
}

const isContributor = meetingId => {
  const playerId = localStorage.getItem('token')
  return http.get(`/meeting/${meetingId}/player/${playerId}/is-contributor`)
    .then(response => response.data)
}

const canPlay = meetingId => {
  return http.get(`/meeting/${meetingId}`)
    .then(response => response.data.status === 0)
}

export const meetingService = {
  createMeeting,
  joinMeeting,
  isContributor,
  canPlay
}
