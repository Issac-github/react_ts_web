import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import type { LimitUpDataType } from './type'

const columns: ColumnsType<LimitUpDataType> = [
  {
    title: '代码',
    dataIndex: 'c'
  },
  {
    title: '名称',
    dataIndex: 'n'
  },
  {
    title: '涨跌幅',
    dataIndex: 'zdp'
  },
  {
    title: '最新价',
    dataIndex: 'p'
  },
  {
    title: '成交额',
    dataIndex: 'amount'
  },
  {
    title: '流通市值',
    dataIndex: 'ltsz'
  },
  {
    title: '总市值',
    dataIndex: 'tshare'
  },
  {
    title: '换手率',
    dataIndex: 'hs'
  },
  {
    title: '封板资金',
    dataIndex: 'fund'
  },
  {
    title: '首次封板时间',
    dataIndex: 'fbt'
  },
  {
    title: '最后封板时间',
    dataIndex: 'lbt'
  },
  {
    title: '炸板次数',
    dataIndex: 'zbc'
  },
  {
    title: '涨停统计',
    dataIndex: 'zttj'
  },
  {
    title: '连板数',
    dataIndex: 'lbc'
  },
  {
    title: '所属行业',
    dataIndex: 'hybk'
  }
]

function LimitUpData(props: any) {
  const { limitUpList } = props
  return <Table columns={columns} dataSource={limitUpList} size="middle" />
}

export default LimitUpData
