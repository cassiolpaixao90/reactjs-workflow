import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Link } from 'react-router-dom';
import {
  findIndex, get, map, replace, set,
} from 'lodash';
import injectReducer from '../../utils/utils.injects';
import reducer from './reducer';
import makeSelectAuthPage from './selectors';
import { onChange, setForm, submit } from './actions';
import Button from '../../components/Button';
import FormDivider from '../../components/FormDivider';
import Input from '../../components/Input/InputsIndex';
import form from './forms.json';
import Content from '../../components/Layout/Content';
import './styles.css';

class AuthPage extends React.Component {
  state = { errors: [], didCheckErrors: false };

  componentDidMount() {
    this.setForm(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.authType !== this.props.match.params.authType) {
      this.setForm(nextProps);
    }
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    const { authType } = this.props.match.params;
    const data = this.props.modifiedData;
    this.props.submit(data, authType);
  };

  //       const errors = [
  //         { name: 'identifier', errors: [err.response.payload.message] },

  setForm = (props) => {
    const params = props.location.search
      ? replace(props.location.search, '?code=', '')
      : props.match.params.id;
    this.props.setForm(props.match.params.authType, params);
  };

  renderLink = () => {
    if (this.props.match.params.authType === 'login') {
      return (
        <div>
          <Link to="/auth/forgot-password">Forgot Password</Link>
          &nbsp;or&nbsp;
          <Link to="/auth/register">register</Link>
        </div>
      );
    }

    return (
      <div>
        <Link to="/auth/login">Ready to signin</Link>
      </div>
    );
  };

  render() {
    const inputs = get(form, ['views', this.props.match.params.authType], []);

    return (
      <Content>
        <div className="content-auth">
          <div className="center-content">
            <h5>Para continuar, faça login no React.</h5>
          </div>
          <form onSubmit={this.handlerSubmit}>
            <div className="row" style={{ textAlign: 'start' }}>
              {map(inputs, (input, key) => (
                <Input
                  autoFocus={key === 0}
                  customBootstrapClass={get(input, 'customBootstrapClass')}
                  didCheckErrors={this.state.didCheckErrors}
                  errors={get(
                    this.state.errors,
                    [
                      findIndex(this.state.errors, ['name', input.name]),
                      'errors',
                    ],
                    []
                  )}
                  key={get(input, 'name')}
                  label={get(input, 'label')}
                  name={get(input, 'name')}
                  onChange={this.props.onChange}
                  placeholder={get(input, 'placeholder')}
                  type={get(input, 'type')}
                  validations={{ required: true }}
                  value={get(this.props.modifiedData, get(input, 'name'))}
                />
              ))}
              <div className="col-md-12 buttonContainer">
                <Button
                  label="save"
                  style={{ width: '100%' }}
                  primary
                  type="submit"
                />
              </div>
            </div>
          </form>
          <div className="linkContainer">{this.renderLink()}</div>
        </div>
      </Content>
    );
  }
}

AuthPage.defaultProps = {};
AuthPage.propTypes = {
  match: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = makeSelectAuthPage();
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onChange,
    setForm,
    submit,
  },
  dispatch
);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'authPage', reducer });
export default compose(
  withReducer,
  withConnect
)(AuthPage);
