import Fetch from 'fetch-ponyfill'

const getUrl = (url, params = {}) => {
  const searchParams = Object.keys(params).length
    ? `?${new URLSearchParams(params).toString()}`
    : ''
  return `${url}${searchParams}`
}

const { fetch } = Fetch()
const log = console.log

const generateHeader = (options) => {
  const opts = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (options && options.headers) {
    Object.keys(options.headers).forEach(key => {
      opts.headers[key] = options.headers[key]
    })
  }
  return opts
}

const checkStatus = async response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  if (response.status === 401) return response
  try {
    const resError = await response.json()
    throw new Error(resError.message)
  } catch (err) {
    const error = new Error(response.statusText || response.status)
    error.name = response.status
    error.response = response
    throw error
  }
}

export const get = async (url, params, options = {}, debug = false) => {
  const opts = generateHeader(options)
  const requestUrl = getUrl(url, params)
  try {
    const startTime = Date.now()
    const res = await fetch(requestUrl, opts)
    const endTime = Date.now()
    const duration = endTime - startTime
    await checkStatus(res)
    const result = await res.json()
    if (debug) {
      log(`
      Request url: {${requestUrl}},
      duration time is ${duration},
      ${duration > 500 ? 'more than 500ms, ' : ''}`)
    } else {
      log(`Request get url: ${requestUrl}`)
    }
    return result
  } catch (err) {
    log(`
    BAD REQUEST:
    Request url: {${requestUrl}},
    parse ERROR is ${JSON.stringify(err)}`)
    throw err
  }
}

export const post = async (url, params, options = {}, debug = false) => {
  let opts = generateHeader(options)

  opts = Object.assign(opts, {
    method: 'POST',
    body: JSON.stringify(params)
  })

  try {
    const startTime = Date.now()
    const res = await fetch(url, opts)
    const endTime = Date.now()
    const duration = endTime - startTime
    await checkStatus(res)
    const result = await res.json()
    if (debug) {
      log(`
      Request url: {${url}},
      params is: ${JSON.stringify(params)}
      duration time is ${duration},
      ${duration > 500 ? 'more than 500ms, ' : ''}`)
    } else {
      log(`Request post url: ${url}, params: ${JSON.stringify(params)}`)
    }
    return result
  } catch (err) {
    if (debug) {
      log(`
      BAD REQUEST:
      Request url: {${url}},
      params is: ${JSON.stringify(params)},
      parse ERROR is ${JSON.stringify(err)}`)
    }
    throw err
  }
}
