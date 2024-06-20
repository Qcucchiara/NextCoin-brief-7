import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export interface ColumnsDynamicList {
  title: string
  className?: string | null
  sort?: 'letters' | 'number' | 'IN PROGRESS, NOT WORKING'
}

export const DynamicList = ({
  tableTitle,
  columns,
  dataList,
  children,
}: {
  tableTitle: string
  columns: ColumnsDynamicList[]
  dataList: any
  children: React.ReactNode
}) => {
  useEffect(() => {}, [tableTitle, columns, dataList])

  return (
    <>
      <h2>{tableTitle}</h2>
      <Table>
        <TableCaption>{tableTitle}</TableCaption>
        <TableHeader>
          <TableRow>
            {columns
              ? columns.map((column, index) => {
                  return (
                    <TableHead
                      key={index + tableTitle + column.title}
                      className={`${column.className}`}
                    >
                      {column.title}
                    </TableHead>
                  )
                })
              : dataList && dataList}
          </TableRow>
        </TableHeader>
        <TableBody>{dataList && children}</TableBody>
      </Table>
    </>
  )
}

export const DynamicListElement = ({
  dataList,
  pagination,
}: {
  dataList: any
  pagination?: number
}) => {
  const [values, setValues] = useState<any[][]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (dataList && dataList.length > 0) {
      if (pagination) {
        setValues(
          dataList
            .slice(offset, pagination + offset)
            .map((item: any) => Object.values(item))
        )
      } else {
        setValues(dataList.map((item: any) => Object.values(item)))
      }
    }
  }, [dataList, offset])

  return (
    <>
      {values.map((rowValues: any[], i: number) => (
        <TableRow key={i + 'Row'}>
          {rowValues.map((item: any, index: number) => (
            <TableCell key={item + index}>{item}</TableCell>
          ))}
        </TableRow>
      ))}
      {pagination && (
        <div className=" flex w-full mb-8">
          {offset > 0 && (
            <Button
              onClick={() => {
                setOffset((prev) => prev - pagination)
              }}
              className=" absolute bottom-4 left-20"
            >
              {'<=='}
            </Button>
          )}
          {pagination + offset <= dataList.length && (
            <Button
              onClick={() => {
                setOffset((prev) => prev + pagination)
              }}
              className=" absolute bottom-4 right-20"
            >
              {'==>'}
            </Button>
          )}
        </div>
      )}
    </>
  )
}
