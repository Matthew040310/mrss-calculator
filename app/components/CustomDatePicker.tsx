import { Grid } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/en-gb';

interface CustomDatePickerProps {
    value?: Dayjs | null;
    handleDateChange?: (date: Dayjs | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    value, handleDateChange
}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DatePicker
                label="Application Submission Date"
                sx={{ width: "100%", bgcolor: "white" }}
                value={value ? dayjs(value) : null}
                onChange={handleDateChange}
                slotProps={{
                    textField: {
                        required: true,
                        helperText: 'DD/MM/YYYY',
                    },
                    actionBar: { actions: ['today'] },
                }}
                views={['year', 'month', 'day']}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker