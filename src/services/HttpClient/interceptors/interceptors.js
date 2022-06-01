import authorization from './request/auth-header'
import contentType from './request/content-type-header'
import notAuthed from './response/not-authed'
import parseErrorResponse from './response/parse-error-response'

const intercept = axiosRef => {
  authorization(axiosRef)
  contentType(axiosRef)
  notAuthed(axiosRef)
  parseErrorResponse(axiosRef)
}

export default intercept
