export const ACTIONS = {
    SAVE_SALOON: 'save_saloon',
    SAVE_PHOTO_SALOON: 'save_photo_saloon',
};

export const saveSalon = (saloon) => ({
    type: ACTIONS.SAVE_SALOON,
    payload: saloon,
});

export const savePhotoSaloon = (photo) => ({
    type: ACTIONS.SAVE_PHOTO_SALOON,
    payload: photo,
});