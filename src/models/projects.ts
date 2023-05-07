export interface Project {
    id?: string,
    title: string,
    description: string,
    usedTechnologies: {
       name: string,
       icon: string,
    }[],
    href: string,
    isPublished: boolean,
    thumbs: string[],
    testimonials?: any[];
    date: Date;
    projectType?: ProjectType;
    projectSource?: string;
}

export enum ProjectType {
    PRIVATE = 0,
    OPEN_SOURCE = 1
}