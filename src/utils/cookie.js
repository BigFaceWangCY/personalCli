const setCookie = (name, value, days = 365) => {
  const date = new Date()
  let expires
  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toGMTString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires}; path=/`
}

const getCookie = (name, { cookie = '' } = {}) => {
  let cookieStr = ''
  if (typeof document === 'undefined') {
    cookieStr = cookie
  } else {
    cookieStr = document.cookie
  }

  const nameEQ = `${name}=`
  const ca = cookieStr.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length)
    }
  }
  return null
}

const deleteCookie = name => {
  setCookie(name, '', -1)
}

export default {
  setCookie,
  getCookie,
  deleteCookie
}
