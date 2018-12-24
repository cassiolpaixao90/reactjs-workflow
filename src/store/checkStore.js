import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';

const checkStore = (store) => {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject,
  };
  invariant(
    conformsTo(store, shape),
    '(app/store...) injectors: Expected a valid redux store'
  );
};

export default checkStore;
