export interface Project {
    id: string;
    name: string;
    masterId: string;
    scanIds: string[];
    created: Date;
    notSeenByOperator: boolean;
    processingStarted: Date;
    humanTime: number;
    ingestTime: number;
    diffTime: number;
    mtime: number;
    owner: string;
}
