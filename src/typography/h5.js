import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  xishengStyles,
} from '../styles';

const cs = StyleSheet.create(xishengStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function H5(props) {
  return (
    <Text
      {...props}
      style={[cs.h5, cs.marginBottom, props.style]}
    >
      {props.children}
    </Text>
  );
}

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;
