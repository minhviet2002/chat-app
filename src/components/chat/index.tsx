import { Size } from "@/src/config/size";
import { Card } from "@mui/material";

function AppChar() {
    return (
        <Card sx={{ marginY: Size.navTop, position: 'absolute', inset: '0 25% 0 25%', minWidth: '50vw', borderRadius: '0.75rem' }}>
            App chart
        </Card>);
}

export default AppChar;