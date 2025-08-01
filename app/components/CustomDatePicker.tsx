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
    const helperText = value ? value.format('DD MMM YYYY') : 'DD/MM/YYYY';

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
            <DatePicker
                label="Application Submission Date"
                value={value ? dayjs(value) : null}
                onChange={handleDateChange}
                slotProps={{
                    textField: {
                        required: true,
                        helperText: helperText,
                        sx: {
                            '& .MuiFormHelperText-root': {
                                fontSize: '12px',
                                fontWeight: 'bold',
                            }, width: '100%',
                        }
                    },
                    actionBar: { actions: ['today'] },
                }}
                views={['year', 'month', 'day']}
            />
        </LocalizationProvider>
    )
}

export default CustomDatePicker