# xisheng-native
Native UI Style for Xi Sheng Asset

# 使用样式
｀｀｀
import {
  xishengStyles,
} from 'xisheng-native';

const xs = StyleSheet.create(xishengStyles);

···
<View style={xs.padding}>
｀｀｀

# Button 
import {
  Button,
} from 'xisheng-native';

<Button
  color="primary"
  text="Button"
  shadow＝{false}
  clear={false}
  full={false}
  round={false}
  outline={false}
  size=sm // xsm, lg, xlg
/>