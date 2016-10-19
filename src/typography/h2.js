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

export default function H2(props) {
  return (
    <Text
      {...props}
      style={[cs.h2, cs.marginBottom, props.style]}
    >
      {props.children}
    </Text>
  );
}

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
