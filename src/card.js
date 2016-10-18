import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  xishengStyles,
} from './styles';

const cs = StyleSheet.create(xishengStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function Card(props) {
  return (
    <View
      shadowColor="rgba(0, 0, 0, 0.3)"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={1}
      shadowRadius={2}
      {...props}
      style={[cs.card, props.style]}
    >
      {props.children}
    </View>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
