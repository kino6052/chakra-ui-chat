import { TAppState } from "./types";

export const getDefaultState = (): TAppState => ({
    input: '',
    messages: [],
});
