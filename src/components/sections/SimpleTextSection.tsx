import * as React from "react"

import { SimpleTextSectionData } from "../../types"
import { Markdown } from "../misc/Markdown"

export const SimpleTextSection: React.FC<{ section: SimpleTextSectionData }> = ({ section }) => {
    return (
        <>
            <Markdown>{section.md}</Markdown>
        </>
    )
}
