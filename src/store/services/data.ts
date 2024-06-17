import { toUpperCase } from '@/utils';
import { type Building, type Floor, type Room } from '../data';

export enum TypeUpperCase {
    GEOGRAPHIC_CONTEXT = 'GEOGRAPHICCONTEXT',
    GEOGRAPHIC_BUILDING = 'GEOGRAPHICBUILDING',
    GEOGRAPHIC_FLOOR = 'GEOGRAPHICFLOOR',
    GEOGRAPHIC_ROOM = 'GEOGRAPHICROOM ',
}

export type SpaceTypeUpperCase =
    | TypeUpperCase.GEOGRAPHIC_CONTEXT
    | TypeUpperCase.GEOGRAPHIC_BUILDING
    | TypeUpperCase.GEOGRAPHIC_FLOOR
    | TypeUpperCase.GEOGRAPHIC_ROOM;

export interface FrontRoom {
    id: string;
    name: string;
    type: TypeUpperCase.GEOGRAPHIC_ROOM;
    nbsRooms: string;
    children: never[];
}
export interface FrontFloor {
    id: string;
    name: string;
    type: TypeUpperCase.GEOGRAPHIC_FLOOR;
    nbsRooms: string;
    rooms: FrontRoom[];
}
export interface FrontBuilding {
    id: string;
    name: string;
    type: TypeUpperCase.GEOGRAPHIC_BUILDING;
    picture: string;
    floors: FrontFloor[];
}

const roomDataBackToFront = (rooms: Room[], nbsRooms: string): FrontRoom[] => {
    return rooms.map((room: Room): FrontRoom => {
        return {
            id: String(room.dynamicId),
            name: room.name,
            type: toUpperCase(room.type) as TypeUpperCase.GEOGRAPHIC_ROOM,
            nbsRooms: nbsRooms,
            children: [],
        };
    });
};
const floorDataBackToFront = (floors: Floor[]): FrontFloor[] => {
    return floors.map((floor: Floor): FrontFloor => {
        const rooms: Room[] = floor.children;
        return {
            id: String(floor.dynamicId),
            name: floor.name,
            type: toUpperCase(floor.type) as TypeUpperCase.GEOGRAPHIC_FLOOR,
            nbsRooms: String(rooms.length),
            rooms: roomDataBackToFront(rooms, String(rooms.length)),
        };
    });
};

export const buildingDataBackToFront = (data: Building[]): FrontBuilding[] => {
    return data.map((val: Building): FrontBuilding => {
        const floors: Floor[] = val.children;
        return {
            id: String(val.dynamicId),
            name: val.name,
            type: toUpperCase(val.type) as TypeUpperCase.GEOGRAPHIC_BUILDING,
            picture: 'https://picsum.photos/200/300',
            floors: floorDataBackToFront(floors),
        };
    });
};

export const mockedRoom: FrontRoom[] = [
    {
        id: '00',
        name: 'undefined',
        type: TypeUpperCase.GEOGRAPHIC_ROOM,
        nbsRooms: '0',
        children: [],
    },
];

export const mockedFloor: FrontFloor[] = [
    {
        id: '00',
        name: 'undefined',
        type: TypeUpperCase.GEOGRAPHIC_FLOOR,
        nbsRooms: '0',
        rooms: [],
    },
];

export const mockedBuilding: FrontBuilding = {
    id: '00',
    name: 'undefined',
    type: TypeUpperCase.GEOGRAPHIC_BUILDING,
    picture: 'https://picsum.photos/200/300',
    floors: mockedFloor,
};
