export interface Endpoint {
    dynamicId: number;
    staticId: string;
    name: string;
    type:
        | 'Temperature'
        | 'Consigne'
        | 'Light'
        | 'Occupation'
        | 'Hygrometry'
        | 'co2'
        | 'Other';
    currentValue: number | boolean;
}

export interface RoomProfil {
    profileName: string;
    endpoints: Endpoint[];
}

export type RoomDetail = RoomProfil[];

export interface RoomDetailState {
    roomData: null | RoomDetail;
    error: null | string;
    loading: boolean;
    requestStatus: null | number;
}

export enum EnumOccupationStatus {
    NAME = 'Occupation',
    UNDEFINED = 'UNDEFINED',
    OCCUPIED = 'OCCUPÉ',
    UNOCCUPIED = 'NON OCCUPÉ',
}

export type StatusOccupation =
    | EnumOccupationStatus.UNDEFINED
    | EnumOccupationStatus.OCCUPIED
    | EnumOccupationStatus.UNOCCUPIED;

export interface RoomOccupation {
    occupation: StatusOccupation;
}

export const roomDetailsDataBackToFront = (
    data: RoomProfil[]
): RoomOccupation => {
    const noDataRetrieve = data.length === 0;
    if (noDataRetrieve) return { occupation: EnumOccupationStatus.UNDEFINED };

    const occupation = data[0].endpoints.filter(
        (val: Endpoint): boolean => val.name === EnumOccupationStatus.NAME
    );

    return occupation.map(
        (val: Endpoint): RoomOccupation => ({
            occupation: val.currentValue
                ? EnumOccupationStatus.OCCUPIED
                : EnumOccupationStatus.UNOCCUPIED,
        })
    )[0];
};
