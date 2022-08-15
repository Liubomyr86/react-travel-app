import { ITripCardProps } from 'models/tripCard.model';

export const filterByLevel = (filteredData: ITripCardProps[], value: string): ITripCardProps[] => {
    if (!value) {
        return filteredData;
    }

    const filteredTrips = filteredData.filter((trip) => value.localeCompare(trip.level!) === 0);
    return filteredTrips;
};
