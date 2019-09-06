import React from  'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export const TableMarkout = (table: Array<Array<string>>) => {
  const header: Array<string> = table[0];
  const body: Array<Array<string>> = table.slice(1);
  const header_jsx = header.map(
    (item) => {
      return (
        <TableCell> { item } </TableCell>
      )
    }
  );

  const body_jsx = body.map(
    (row) => {
      return (
        <TableRow>
          {
            row.map(
              (item) => {
                return (
                  <TableCell> { item } </TableCell>
                )
              }
            )
          }
        </TableRow>
      )
    }
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          { header_jsx }
        </TableRow>
      </TableHead>
      <TableBody>
        { body_jsx }
      </TableBody>
    </Table>
  )
}