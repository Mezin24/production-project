import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthUserdata = (state: StateSchema) => state.user.authData;
