export const getTomorrowDate = (): string => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toJSON().slice(0, 10);
};
