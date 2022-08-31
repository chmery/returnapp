import classes from "./Summary.module.css";
import DarkCard from "./Cards/DarkCard";
import React from "react";

const Summary = ({ children }: { children: React.ReactNode }) => {
    return (
        <DarkCard style={{ marginBottom: "2em" }}>
            <div className={classes["summary"]}>{children}</div>
        </DarkCard>
    );
};

export default Summary;
