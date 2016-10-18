import React, {
  PropTypes,
} from 'react';

import {
  ScrollView,
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
  scroll: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {
  scroll: true,
};

export default function Content(props) {
  const contentStyle = [cs.container, props.padding && cs.padding, props.style];
  if (props.scroll === true) {
    return (
      <ScrollView
        {...props}
        style={contentStyle}
      >
        {props.children}
      </ScrollView>
    );
  }
  return (
    <View
      {...props}
      style={contentStyle}
    >
      {props.children}
    </View>
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
