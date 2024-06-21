import React, { useEffect, useState } from 'react'
import { BarChart, LineChart } from '@mui/x-charts'
import { historyCrypto } from '@/services/cryptoAPI/crypto/historyCrypto'
import { CryptoHistory } from '@/utils/types/cryptoTypes'

export const HistoryCrypto = ({ cryptoId }: { cryptoId: string }) => {
  const [graphData, setGraphData] = useState([])
  useEffect(() => {
    cryptoId &&
      historyCrypto(cryptoId).then((res) => {
        const graph: { created_at: string; value: number }[] | any = []
        res?.data.map((element: CryptoHistory) => {
          graph.push({
            created_at: element.created_at,
            value: element.value,
          })
        })
        setGraphData(graph)
      })
  }, [cryptoId])

  return (
    <>
      {graphData && (
        <LineChart
          dataset={graphData}
          xAxis={[
            {
              dataKey: 'created_at',
              scaleType: 'band',
              reverse: true,
            },
          ]}
          series={[
            {
              dataKey: 'value',
            },
          ]}
          rightAxis={{}}
          leftAxis={null}
          width={700}
          height={300}
        />
      )}
    </>
  )
}
// 238822a1-b870-41a1-ae4e-9e4caa2f622f
// 64fec17d-6a1c-4236-a1f9-6be732d7d24b
