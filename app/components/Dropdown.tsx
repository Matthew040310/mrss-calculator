import { Autocomplete, TextField } from "@mui/material";

type DropdownProps = {
    value: string | null;
    onChange: (event: React.SyntheticEvent, newValue: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange }) => {
    return (
        <Autocomplete
            sx={{ width: "100%", bgcolor: "white" }}
            options={["E-GIRO", "Hardcopy DDA"]}
            value={value}
            onChange={onChange}
            renderInput={(params) => (
                <TextField {...params} label={"E-GIRO or Hardcopy DDA"} required={true} />
            )}
        />
    )
}

export default Dropdown