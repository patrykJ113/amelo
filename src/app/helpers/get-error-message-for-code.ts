

export function getErrorMessageForCode(errorCode: String) {
  switch (errorCode) {
    case 'REGISTER:EMAIL_TAKEN':
      return 'This email is already registered. Please use another email or sign in.'
    default:
      return 'Something went wrong on our side. Please try again later'
  }
}
