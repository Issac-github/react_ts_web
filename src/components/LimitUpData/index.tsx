import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import type { LimitUpDataType } from './type'

const columns: ColumnsType<LimitUpDataType> = [
  {
    title: '名称',
    dataIndex: 'n',
    fixed: 'left',
    width: 100,
    align: 'center'
  },
  {
    title: '代码',
    dataIndex: 'c',
    align: 'center'
  },
  {
    title: '成交额',
    dataIndex: 'amount',
    align: 'center'
  },
  {
    title: '流通市值',
    dataIndex: 'ltsz',
    align: 'center'
  },
  {
    title: '总市值',
    dataIndex: 'tshare',
    align: 'center'
  },
  {
    title: '换手率',
    dataIndex: 'hs',
    align: 'center',
    render: (hs) => hs.toFixed(2) + '%'
  },
  {
    title: '封板资金',
    dataIndex: 'fund',
    align: 'center'
  },
  {
    title: '首次封板时间',
    dataIndex: 'fbt',
    align: 'center'
  },
  {
    title: '最后封板时间',
    dataIndex: 'lbt',
    align: 'center'
  },
  {
    title: '炸板次数',
    dataIndex: 'zbc',
    align: 'center'
  },
  {
    title: '涨停统计',
    dataIndex: 'zttj',
    align: 'center'
  },
  {
    title: '连板数',
    dataIndex: 'lbc',
    align: 'center'
  },
  {
    title: '所属行业',
    dataIndex: 'hybk',
    fixed: 'right',
    width: 100,
    align: 'center'
  },
  {
    title: '涨跌幅',
    dataIndex: 'zdp',
    fixed: 'right',
    width: 100,
    align: 'center',
    render: (zdp) => zdp.toFixed(2) + '%'
  },
  {
    title: '最新价',
    dataIndex: 'p',
    fixed: 'right',
    width: 100,
    align: 'center',
    render: (p) => (p / 1000).toFixed(2)
  }
]

function LimitUpData(props: any) {
  const { limitUpList } = props
  return (
    <Table
      columns={columns}
      dataSource={limitUpList}
      size="middle"
      scroll={{ x: 1300 }}
    />
  )
}

export default LimitUpData
