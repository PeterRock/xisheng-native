import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
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

export default function Note(props) {
  return (
    <Text
      {...props}
      style={[cs.note, props.style]}
    >
      {props.children}
    </Text>
  );
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;
