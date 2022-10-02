import { Typography } from "@mui/material"
import * as React from "react"

import {
    ErrorSectionData,
    ImportSectionData,
    LeftPaneData,
    ProjectSectionData,
    SectionData,
    SeparatorSectionData,
    SimpleTextSectionData,
    SkillSectionData,
    SplitSectionData,
    TimelineSectionData,
    WebsiteRootData,
} from "../types"
import { ErrorSection } from "./sections/ErrorSection"
import { ImportSection } from "./sections/ImportSection"
import { LeftPaneSection } from "./sections/LeftPaneSection"
import { ProjectSection } from "./sections/ProjectSection"
import { SeparatorSection } from "./sections/SeparatorSection"
import { SimpleTextSection } from "./sections/SimpleTextSection"
import { SkillSection } from "./sections/SkillSection"
import { SplitSection } from "./sections/SplitSection"
import { TimelineSection } from "./sections/TimelineSection"
import { WebsiteRootSection } from "./sections/WebsiteRootSection"

export const Section: React.FC<{ section: SectionData }> = ({ section }) => {
    // TODO register/geenrate side bar navigation
    return (
        <>
            {section.title && (
                <Typography sx={{ mb: 1 }} variant="h4">
                    {section.title}
                </Typography>
            )}
            {(() => {
                switch (section.type) {
                    case "left_pane":
                        return <LeftPaneSection section={section as LeftPaneData} />
                    case "website_data":
                        return <WebsiteRootSection section={section as WebsiteRootData} />
                    case "import":
                        return <ImportSection section={section as ImportSectionData} />
                    case "split":
                        return <SplitSection section={section as SplitSectionData} />
                    case "text":
                        return <SimpleTextSection section={section as SimpleTextSectionData} />
                    case "skill":
                        return <SkillSection section={section as SkillSectionData} />
                    case "timeline":
                        return <TimelineSection section={section as TimelineSectionData} />
                    case "projects":
                        return <ProjectSection section={section as ProjectSectionData} />
                    case "separator":
                        return <SeparatorSection section={section as SeparatorSectionData} />
                    case "error":
                        return <ErrorSection section={section as ErrorSectionData} />
                }
                return <div>Unknown section {section.type}</div>
            })()}
        </>
    )
}
