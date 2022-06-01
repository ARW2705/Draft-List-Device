import { BASE_URL } from './base-url'

const getClientURL = endpoint => {
  return `${BASE_URL}/devices/client/${endpoint}`
}

export default getClientURL
