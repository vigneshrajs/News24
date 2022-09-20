export enum ImagesName {
    AppLogo = 'appLogo',
    SerachIcon = 'serachIcon',
    MenuIcon = 'menuIcon',
}


export const images = {};

export const darkImages = {
    ...images,
};

export type ImageName = keyof typeof images;
