import { ITripCardProps } from '../../../models/tripCard.model';

export const filterBySearchValue = (filteredData: ITripCardProps[], value: string): ITripCardProps[] => {
    if (!value) {
        return filteredData;
    }

    const filteredTrips = filteredData.filter((trip) =>
        trip.title?.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );
    return filteredTrips;
};
