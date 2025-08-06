"use client";
import { useState } from "react";
import dayjs from "dayjs";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";

import CustomDatePicker from "./components/CustomDatePicker";
import Dropdown from "./components/Dropdown";
import ResultTable from "./components/ResultTable";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs());
  const [desiredAmount, setDesiredAmount] = useState<number | ''>('');
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
          Quick MRSS Top-Up Calculator
        </Typography>

        <Typography variant="body1" component="p">
          This calculator helps you estimate your monthly top-ups to the MRSS based on your desired annual amount.
        </Typography>

        {/* Input Area */}
        <CustomDatePicker
          value={selectedDate}
          handleDateChange={(date) => {
            setSelectedDate(date);
          }}
        />

        <TextField fullWidth type="number"
          value={desiredAmount}
          label="Desired Amount in a Year"
          slotProps={{
            htmlInput: { min: 0 },
            input: { startAdornment: <InputAdornment position="start">$</InputAdornment> },
          }}
          onChange={(event) => {
            const value = event.target.value === '' ? '' : parseFloat(event.target.value);
            setDesiredAmount(value);
          }}
        />

        <Dropdown
          value={dropdownValue}
          onChange={(event, newValue) => {
            setDropdownValue(newValue);
          }}
        />

        <Button
          variant="contained" sx={{ width: "30%", margin: "auto" }}
          onClick={() => {
            setSelectedDate(dayjs());
            setDesiredAmount('');
            setDropdownValue(null);
          }}>Reset Inputs</Button>

        {/* Output Area */}
        <ResultTable
          selectedDate={selectedDate}
          desiredAmount={desiredAmount}
          dropdownValue={dropdownValue}
        />
      </main>
    </div>
  );
}
