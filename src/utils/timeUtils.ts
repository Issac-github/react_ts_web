import moment from 'moment'
import { Moment } from 'moment'

function timeStampToYMD(value: Moment) {
  return value?.format('YYYYMMDD')
}

export { timeStampToYMD }
