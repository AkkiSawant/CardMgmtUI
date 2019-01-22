export class HttpResponse {
    public constructor(init?: Partial<HttpResponse>) {
        Object.assign(this, init);
    }
    
    result: string;
    code: string;
    description: string;
}