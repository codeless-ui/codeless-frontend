import {
    UPDATE_NAME,
    UPDATE_HTTP_METHOD,
    UPDATE_REQUEST_URL,
    CLEAN_ALL_TEST_ATTRIBUTES
} from './test-action'

export const testReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_NAME: {
            const { name } = payload;
            let test = {
                ...state,
                name
            }
            return test;
        }
        case UPDATE_HTTP_METHOD: {
            const { httpMethod } = payload;
            let test = {
                ...state,
                httpMethod
            }
            return test;
        }
        case UPDATE_REQUEST_URL: {
            const { requestURL} = payload;
            let test = {
                ...state,
                requestURL
            }
            return test;
        }
        case CLEAN_ALL_TEST_ATTRIBUTES: {
            return {};
        }
        default:
            return state;
    }
}