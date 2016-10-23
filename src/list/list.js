import React from 'react';

import {
  PropTypes,
  StyleSheet,
  View,
} from 'react-native';

import {
  xishengStyles,
} from '../styles';

const cs = StyleSheet.create(xishengStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function List(props) {
  return (
    <View
      {...props}
      style={[cs.list, props.style]}
    >
      {props.children}
    </View>
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
