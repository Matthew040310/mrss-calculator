import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import dayjs from "dayjs";

interface ResultTableProps {
    selectedDate: dayjs.Dayjs | null;
    desiredAmount: number | undefined;
    dropdownValue: string | null;
}

const ResultTable: React.FC<ResultTableProps> = ({
    selectedDate, desiredAmount, dropdownValue
}) => {



    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "18px", width: "45%" }}>Results</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Effective Month</TableCell>
                        <TableCell component="th" scope="row">{dayjs(selectedDate).format('MMMM')}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Estimated Monthly Deduction (Current Year)</TableCell>
                        <TableCell component="th" scope="row">Test</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>Estimated Monthly Deduction (Following Year)</TableCell>
                        <TableCell component="th" scope="row">Test</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ResultTable