import {Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');

const STATUSBAR_HEIGHT = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

const ITEM_SIZE = {
  cover_width: width * 0.9,
  margin: 10,
};

const FULL_ITEM_SIZE = ITEM_SIZE.cover_width + ITEM_SIZE.margin * 2;

const MODAl_SIZE = {
  modal_height: height * 0.52,
  header_height: 70,
  border_radius: 40,
};

const MODAL_CONTAINER_HEIGHT =
  MODAl_SIZE.modal_height - MODAl_SIZE.header_height;

export {
  ITEM_SIZE,
  FULL_ITEM_SIZE,
  width,
  height,
  MODAl_SIZE,
  MODAL_CONTAINER_HEIGHT,
  STATUSBAR_HEIGHT,
};
