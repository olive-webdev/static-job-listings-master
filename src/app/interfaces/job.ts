export interface Job {
    id: number,
    company: string,
    logo: string,
    new: true,
    featured: true,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}
