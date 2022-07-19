export interface ITripCardProps {
    image?: string;
    title?: string;
    duration?: number;
    level?: string;
    price?: number;
    description?: string;
    id?: string;
    createdAt?: string;
}

export interface ITripCardDescriptionProps {
    classes: string;
    description: string | undefined;
}
