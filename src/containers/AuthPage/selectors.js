import { createSelector } from 'reselect';

const selectAuthPageDomain = state => state.get('authPage');

const makeSelectFormType = () => createSelector(
  selectAuthPageDomain,
  substate => substate.get('formType')
);
const makeSelectModifiedData = () => createSelector(
  selectAuthPageDomain,
  substate => substate.get('modifiedData').toJS()
);

const makeSelectIsRequested = () => createSelector(
  selectAuthPageDomain,
  substate => substate.get('isRequested').toJS()
);

const makeSelectIsRegistered = () => createSelector(
  selectAuthPageDomain,
  substate => substate.get('isRegistered').toJS()
);

const makeSelectErrors = () => createSelector(
  selectAuthPageDomain,
  substate => substate.get('errors').toJS()
);

const makeSelectAuthPage = () => createSelector(
  selectAuthPageDomain,
  substate => substate.toJS()
);

export default makeSelectAuthPage;
export {
  makeSelectFormType,
  makeSelectModifiedData,
  selectAuthPageDomain,
  makeSelectIsRequested,
  makeSelectIsRegistered,
  makeSelectErrors,
};
