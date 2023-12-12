
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function ModeSelected() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  const handleChange = (e: any) => {
    setMode(e.target.value);
  };
  useEffect(() => {
    setMounted(true);
  }, [])
  if (!mounted) {
    return null;
  }
  return (
    <>
      <FormControl size="small" sx={{ m: 1 }}>
        <InputLabel id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="dark">
            <DarkModeIcon />
          </MenuItem>
          <MenuItem value="light">
            <LightModeIcon />
          </MenuItem>
          {/* <MenuItem value="system">
            <SettingsSuggestIcon />
          </MenuItem> */}
        </Select>
      </FormControl>
    </>
  );
}

export default ModeSelected;