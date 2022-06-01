class Token {
  constructor() {
    if (Token._instance) return Token._instance
    Token._instance = this
    this.accessToken = localStorage.getItem('accessToken') || ''
    this.refreshToken = localStorage.getItem('refreshToken') || ''
  }

  getToken(tokenType) {
    if (tokenType === 'accessToken') {
      return this.accessToken
    } else if (tokenType === 'refreshToken') {
      return this.refreshToken
    }
    throw new Error(`Cannot get token - Invalid token type: ${tokenType}`)
  }

  setToken(tokenType, token) {
    if (tokenType === 'accessToken') {
      this.accessToken = token
      localStorage.setItem('accessToken', token)
    } else if (tokenType === 'refreshToken') {
      this.refreshToken = token
      localStorage.setItem('refreshToken', token)
    } else {
      throw new Error(`Cannot set token - Invalid token type: ${tokenType}`)
    }
  }

  removeToken(tokenType, token) {
    if (tokenType === 'accessToken') {
      localStorage.removeItem('accessToken')
      this.accessToken = ''
    } else if (tokenType === 'refreshToken') {
      localStorage.removeItem('refreshToken')
      this.refreshToken = ''
    } else {
      throw new Error(`Cannot remove token - Invalid token type: ${tokenType}`)
    }
  }

  clearTokens() {
    this.removeToken('accessToken')
    this.removeToken('refreshToken')
  }
}

const token = new Token()

export default token
