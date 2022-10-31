import request from '../request/index'
import { LimitUpDataType } from './type'

enum ChatInfoUrl {
  MarkMsgReq = '/chat/collect'
}

export function getLimitUpData(data: LimitUpDataType) {
  return request.get({
    url: ChatInfoUrl.MarkMsgReq,
    params: data
  })
}
