export interface SubmitRequestModel {
    username: string;
    userChoice: string;
}

export interface SubmitResponseModel {
    username: string;
    userChoice: string;
    cpuChoice: string;
    result: string;
}