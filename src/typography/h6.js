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

export default function H6(props) {
  return (
    <Text
      {...props}
      style={[cs.h6, props.style]}
    >
      {props.children}
    </Text>
  );
}

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;
