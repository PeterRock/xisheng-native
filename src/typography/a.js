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

export default function A(props) {
  return (
    <Text
      {...props}
      style={[cs.a, props.style]}
    >
      {props.children}
    </Text>
  );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;
