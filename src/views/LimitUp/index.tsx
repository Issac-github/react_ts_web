import React, { useState } from 'react'
import '../../assets/css/App.css'
import { getLimitUpData } from '../../service/limitData/index'
import LimitUpData from '../../components/LimitUpData/index'
import type { LimitUpDataType } from './type'
import type { DatePickerProps } from 'antd'
import { DatePicker } from 'antd'
import { timeStampToYMD } from '../../utils/timeUtils'
import { Moment } from 'moment'

function LimitUp() {
  const [limitUpList, setLimitUpList] = useState<LimitUpDataType[]>([])
  const [totalLimitUp, setTotalLimitUp] = useState(20)
  const [selectDate, setSelectDate] = useState<Moment>()

  function getData(date: Moment) {
    const formatedDate = Number(timeStampToYMD(date as Moment))

    return new Promise((resolve, reject) => {
      getLimitUpData({
        cb: 'callbackdata7665757',
        ut: '7eea3edcaed734bea9cbfc24409ed989',
        dpt: 'wz.ztzt',
        Pageindex: 0,
        pagesize: totalLimitUp,
        sort: 'fbt:asc',
        date: formatedDate,
        _: new Date().valueOf()
      })
        .then((res: any) => {
          const limitUpList = JSON.parse(
            res.substring(res.indexOf('(') + 1, res.lastIndexOf(')'))
          )
          setLimitUpList(limitUpList?.data?.pool || [])
          setTotalLimitUp(limitUpList?.data?.tc || 20)
          resolve(limitUpList)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  const onChange: DatePickerProps['onChange'] = (date) => {
    setSelectDate(date as Moment)
    setTimeout(() => {
      getData(selectDate as Moment).then((res) => {
        // setTimeout(() => {
        //   getData(selectDate as Moment)
        // }, 3000)
      })
    }, 500)
  }

  return (
    <div className="App">
      <DatePicker onChange={onChange} />
      <LimitUpData limitUpList={limitUpList} />
    </div>
  )
}

export default LimitUp
