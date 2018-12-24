import { createSelector } from 'reselect';

const selectSecurePageDomain = state => state.get('securePage');

const makeSelectSecurePage = () => createSelector(
  selectSecurePageDomain,
  substate => substate.toJS()
);

export default makeSelectSecurePage;
export { selectSecurePageDomain };
