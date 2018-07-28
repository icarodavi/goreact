import React from 'react';

// REDUX E PROPTYPES
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ErrorActions } from '../../store/ducks/error';

import { Container } from './styles';

import CloseIcon from '../../assets/images/Close_button.svg';

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
      <button type="submit" onClick={hideError}>
        <img src={CloseIcon} alt="X" />
      </button>
    </Container>
  );
ErrorBox.propTypes = {
  hideError: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
  }),
};
const mapStateToProps = state => ({
  error: state.error,
});
const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
