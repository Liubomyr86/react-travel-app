import { ITripCardProps } from 'models/tripCard.model';

export const filterByDuration = (filteredData: ITripCardProps[], value: string): ITripCardProps[] => {
    if (!value) {
        return filteredData;
    }

    switch (value) {
        case '0_x_5':
            return filteredData.filter((trip) => trip.duration! > 0 && trip.duration! < 5);
        case '5_x_10':
            return filteredData.filter((trip) => trip.duration! >= 5 && trip.duration! < 10);
        default:
            return filteredData.filter((trip) => trip.duration! >= 10);
    }
};
