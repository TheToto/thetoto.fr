import { Alert } from "@mui/material"
import * as React from "react"

import { ErrorSectionData } from "../../types"
import { Markdown } from "../misc/Markdown"

export const ErrorSection: React.FC<{ section: ErrorSectionData }> = ({ section }) => {
    return (
        <Alert severity="error">
            <Markdown>{section.md}</Markdown>
        </Alert>
    )
}
