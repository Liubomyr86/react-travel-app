export const formatDate = (date: string): string => new Date(date).toJSON().slice(0, 10);
