import { SpaceType } from './store/data';
import { SpaceTypeUpperCase } from './store/services/data';

export const toUpperCase = (
    value: string | SpaceType
): string | SpaceTypeUpperCase => value.toUpperCase();
