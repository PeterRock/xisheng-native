import React from 'react';

import {
  PropTypes,
  StyleSheet,
  TouchableHighlight,
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
  onPress: PropTypes.func,
  style: PropTypes.any,
};

const defaultProps = {};

export default function Item(props) {
  if (props.onPress) {
    return (
      <TouchableHighlight
        {...props}
        underlayColor={'#DADADA'}
        onPress={props.onPress}
      >
        <View style={[cs.item, props.style]}>
          {props.children}
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View
        {...props}
        style={[cs.item, props.style]}
      >
        {props.children}
      </View>
    </View>
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
