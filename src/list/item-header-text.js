import React,{
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
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function ItemHeaderText(props) {
  return (
    <Text
      {...props}
      style={[
        cs.itemText,
        cs.itemHeaderText,
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
}

ItemHeaderText.propTypes = propTypes;
ItemHeaderText.defaultProps = defaultProps;
