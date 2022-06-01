import axios from 'axios'
import getClientURL from './helpers/client-url'
import getImageURL from './helpers/image-url'
import intercept from './interceptors/interceptors'

class HttpClient {
  constructor() {
    if (HttpClient._instance) return HttpClient._instance
    HttpClient._instance = this
    intercept(axios)
  }

  request(config) {
    return axios(config).then(response => response.data)
  }

  requestWithData(method, endpoint, data) {
    return this.request({
      data,
      method,
      url: getClientURL(endpoint)
    })
  }

  requestWithoutData(method, endpoint) {
    return this.request({
      method,
      url: getClientURL(endpoint)
    })
  }

  get(endpoint) {
    return this.requestWithoutData('get', endpoint)
  }

  post(endpoint, data) {
    return this.requestWithData('post', endpoint, data)
  }

  patch(endpoint, data) {
    return this.requestWithData('patch', endpoint, data)
  }

  delete(endpoint) {
    return this.requestWithoutData('delete', endpoint)
  }
}

const httpClient = new HttpClient()

export default httpClient
