import * as THREE from 'three';

import { INIT, ADD_OBJECT, ADD_OBJECTS, SELECT_OBJECT } from '../actions/ar';

const initialState = {
    // used for touch events to see if we touched an object
    raycaster: new THREE.Raycaster(),
    // need to track meshes for raycaster
    meshes: [],
    // need to track objects in the scene for caching, recalibrating,
    objects: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT:
            return { ...initialState, ...action.state };
        case ADD_OBJECT:
            return {
                ...state,
                objects: [...state.objects, action.object]
            };
        case ADD_OBJECTS:
            return {
                ...state,
                objects: [...state.objects, ...action.objects]
            };
        case SELECT_OBJECT:
            return {
                ...state,
                selection: action.object
            };
        default:
            return state;
    }
}
