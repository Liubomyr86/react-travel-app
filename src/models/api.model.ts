export interface IQuery {
    [key: string]: string | number | boolean;
}

export interface IFetchOptions {
    method?: string;
    query?: IQuery;
    payload?: BodyInit | null | undefined;
    contentType?: string;
    hasAuth?: boolean;
}

export interface IResponse {
    [key: string]: string | number | boolean;
}
