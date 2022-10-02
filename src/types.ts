export interface SectionData {
    type: string
    title?: string
    hideSidebar?: boolean
}

export interface ImportSectionData {
    type: "import"
    import: string
}

export interface WebsiteRootData extends SectionData {
    type: "root"
    leftPane: LeftPaneData
    content: SectionData[]
}

export interface LeftPaneData extends SectionData {
    type: "left_pane"
    firstname: string
    lastname: string
    pseudo: string
    short_bio_md: string
    avatar_thumb: string
    avatar_url: string
    email: string
    links: Link[]
}

export interface SplitSectionData extends SectionData {
    type: "split"
    items: SectionData[]
}

export interface SimpleTextSectionData extends SectionData {
    type: "text"
    md: string
}

export interface SkillSectionData extends SectionData {
    type: "skill"
    items: Array<{
        icons?: string[]
        hints?: string[]
        text?: string
        count: number
        heart?: boolean
    }>
}

export interface TimelineSectionData extends SectionData {
    type: "timeline"
    items: Array<{
        title: string
        place: string
        description?: string
        year: number | string
        isSchool?: boolean
        chip?: string
    }>
}

export interface ProjectSectionData extends SectionData {
    type: "project"
    items: Array<{
        name: string
        description: string
        img?: string
        icons: string[]
        links?: Link[]
        floating?: Link
        tags?: string[]
    }>
}

export interface SeparatorSectionData extends SectionData {
    type: "separator"
}

export interface ErrorSectionData extends SectionData {
    type: "error"
    md: string
}

///

export interface Link {
    name?: string
    icon?: string
    url: string
}
