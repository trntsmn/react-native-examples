import {
    LIST_ASSETS,
    LIST_ASSETS_SUCCESS,
    LIST_ASSETS_ERROR,
    LOAD_MORE,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_ERROR,
    OPEN,
    CLOSE
} from '../actions/poly';

const initialState = {
    assets: [],
    loading: false,
    loadingMore: false,
    show: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LIST_ASSETS:
            return {
                ...state,
                loading: true
            };
        case LIST_ASSETS_SUCCESS:
            return {
                ...state,
                ...action.results,
                assets: action.assets,
                loading: false
            };
        case LIST_ASSETS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case LOAD_MORE:
            return {
                ...state,
                loadingMore: true
            };
        case LOAD_MORE_SUCCESS:
            return {
                ...state,
                ...action.results,
                assets: [...state.assets, ...action.assets],
                loadingMore: false
            };
        case LOAD_MORE_ERROR:
            return {
                ...state,
                error: action.error,
                loadingMore: false
            };
        case OPEN:
            return {
                ...state,
                show: true
            };
        case CLOSE:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}
