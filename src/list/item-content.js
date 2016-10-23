import React,{
  PropTypes,
} from 'react';

import {
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
  line: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {
  line: true,
};

export default function ItemContent(props) {
  const itemNoLine = !props.line;
  return (
    <View
      {...props}
      style={[
        cs.itemContent,
        itemNoLine && cs.itemNoLine,
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

ItemContent.propTypes = propTypes;
ItemContent.defaultProps = defaultProps;
