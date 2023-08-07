import { css, styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Colors } from '../theme/Colors'

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: Colors.tableOdd,
  },
}))

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function BaseTable() {
  return (
    <div
      css={css`
        background: ${Colors.panel};
        padding: 0 18px 18px;
        border-radius: 6px;
      `}
    >
      <TableContainer
        css={css`
          &.MuiTableContainer-root {
            background: ${Colors.panel};
            color: ${Colors.foreground};
          }
          & .MuiTableHead-root .MuiTableCell-root {
            color: ${Colors.body};
          }
          & .MuiTableCell-root {
            color: ${Colors.foreground};
            border: none;
          }
          & .MuiTableRow-root {
            border-radius: 6px;
          }

          table td:last-child {
            border-bottom-right-radius: 6px;
            border-top-right-radius: 6px;
          }

          table th:first-child,
          table td:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }
        `}
      >
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          css={css`
            &.MuiTable-root {
              background: ${Colors.panel};
              color: ${Colors.foreground};
            }
          `}
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

