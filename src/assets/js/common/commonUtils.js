import moment from 'moment'
export const isEmpty = (object) => {
  if (object === null || object.length === 0) {
    return true
  }
  return false
}

export const getSummary = (text, limit, filter) => {
  if (!text.length) return ''
  let summary = '내용 없음'
  const ts = text.split('\n')
  const ss = []
  for (const t of ts) {
    const index = t.indexOf(filter)
    if (index >= 0) continue
    if (t.length) ss.push(t)
  }
  const s = ss.join('\n')
  if (s.length > limit) {
    summary = s.substring(0, limit)
    summary += ' ...'
  } else {
    summary = s
  }
  return summary
}

export const newCheck = (time) => {
  const bt = moment(time)
  const ct = moment()
  const r = ct.diff(bt, 'hours')
  return r < 12
}
