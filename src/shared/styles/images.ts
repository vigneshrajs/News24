

export enum ImagesName {
    MainUnselectedIcon = 'MainUnselectedIcon',
    SportsUnselectedIcon = 'SportsUnselectedIcon',
    InteractionUnselectedIcon = 'InteractionUnselectedIcon',
}

export const images = {
};

export const darkImages = {
    ...images,
};

export type ImageName = keyof typeof images;
