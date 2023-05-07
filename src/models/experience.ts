interface Job {
    company: string;
    charge: string;
    description: string;
}

export interface Experience {
    date: string;
    jobs: Job[];
}