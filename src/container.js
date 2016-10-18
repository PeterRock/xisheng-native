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
  padding: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {};

export default function Container(props) {
  return (
    <View
      {...props}
      style={[cs.container, props.padding && cs.padding, props.style]}
    >
      {props.children}
    </View>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
