export interface Sponsor {
    _id: string;
    sponsorId: string;
    sourceNumber: string;
    name: string;
    dateOfLastModification: string;
    workers: Worker[];
}

export interface Worker {
    workerName: string;
    residencyNumber: string;
    typeOfConsent: string;
    nationality: string;
    occupation: string;
    type: string;
    editMode?: boolean;
}

