import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsename = (state: StateSchema) => state?.login?.username || '';
