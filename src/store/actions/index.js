export const ACTIONS = {
  SAVE_SALOON: 'save_saloon',
};

export const saveSalon = (saloon) => ({
  type: ACTIONS.SAVE_SALOON,
  payload: saloon,
});
