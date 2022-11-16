import { createGlobalState } from "react-hooks-global-state";

const initialState = { user: null };

const { setGlobalState , useGlobalState} = createGlobalState(initialState)

export { setGlobalState, useGlobalState }