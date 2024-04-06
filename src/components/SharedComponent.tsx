import { Button } from "@mui/material";
import { useState } from "react";

export const SharedComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <div onClick={() => setCount((prev) => prev + 1)}>
            <h4>Shared Component</h4>

            <Button variant="contained">
                Count {count}
            </Button>
        </div>
    );
};