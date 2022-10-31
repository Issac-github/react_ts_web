import React, { useState } from 'react'
import '../../assets/css/App.css'
import { getLimitUpData } from '../../service/limitData/index'
import LimitUpData from '../../components/LimitUpData/LimitUpData'
import type { LimitUpDataType } from '../LimitUp/type'

function LimitUp() {
  const [limitUpList, setLimitUpList] = useState<LimitUpDataType[]>([])
  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() => {
            getLimitUpData({
              cb: 'callbackdata8499545',
              ut: '7eea3edcaed734bea9cbfc24409ed989',
              dpt: 'wz.ztzt',
              Pageindex: 0,
              pagesize: 100,
              sort: 'fbt:asc',
              date: 20221027,
              _: 1667125241721
            }).then((res: any) => {
              console.log(
                JSON.parse(
                  JSON.stringify(
                    res.substring(
                      res.indexOf('(') + 1,
                      res.lastIndexOf(')') - 1
                    )
                  )
                ).data
              )

              setLimitUpList(
                JSON.parse(
                  JSON.stringify(
                    res.substring(
                      res.indexOf('(') + 1,
                      res.lastIndexOf(')') - 1
                    )
                  )
                )?.data?.pool || []
              )
            })
          }}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <LimitUpData limitUpList={limitUpList} />
      </header>
    </div>
  )
}

export default LimitUp
