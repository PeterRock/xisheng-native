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

export default function P(props) {
  return (
    <Text
      {...props}
      style={[cs.p, props.style]}
    >
      {props.children}
    </Text>
  );
}

P.propTypes = propTypes;
P.defaultProps = defaultProps;
