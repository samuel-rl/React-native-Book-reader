/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  View,
  Animated,
  ScrollView,
  Image,
  FlatList,
  LogBox,
  TouchableWithoutFeedback,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {
  MODAL_CONTAINER_HEIGHT,
  height,
  MODAl_SIZE,
  width,
  STATUSBAR_HEIGHT,
} from '../utils/constant';
import {Modalize} from 'react-native-modalize';
import {Color, colors, Font, fonts, Story} from '../utils/db';

const StoryScreen = ({route}: any) => {
  const story: Story = route.params.item;
  const [opacityHeader] = useState<Animated.Value>(new Animated.Value(0));
  const [translateYImageFullScreen] = useState<Animated.Value>(
    new Animated.Value(0),
  );
  const [translateYImage] = useState<Animated.Value>(new Animated.Value(0));
  const [opacityText] = useState<Animated.Value>(new Animated.Value(0));
  const [marginText] = useState<Animated.Value>(new Animated.Value(0));
  const modalizeRef = useRef<Modalize>(null);
  const [modalChoice, setModalChoice] = useState<number>(1);
  const [animatedModal] = useState<Animated.Value>(new Animated.Value(0));
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedFont, setSelectedFont] = useState<Font>(fonts[0]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    Animated.sequence([
      Animated.timing(opacityHeader, {
        toValue: 1,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(translateYImageFullScreen, {
          toValue: 1,
          duration: 600,
          delay: 600,
          useNativeDriver: true,
        }),
        Animated.timing(translateYImage, {
          toValue: 1,
          duration: 1000,
          delay: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(opacityText, {
          toValue: 1,
          duration: 900,
          delay: 100,
          useNativeDriver: true,
        }),
        Animated.timing(marginText, {
          toValue: 1,
          duration: 700,
          delay: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [
    marginText,
    opacityHeader,
    opacityText,
    translateYImage,
    translateYImageFullScreen,
  ]);

  const OpenModal = () => {
    modalizeRef.current?.open();
  };

  const openContent = (index: number) => {
    Animated.timing(animatedModal, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setModalChoice(index);
      Animated.timing(animatedModal, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  };

  const ListFont = () => (
    <FlatList
      style={{
        width: width,
        height: MODAL_CONTAINER_HEIGHT,
        paddingHorizontal: 50,
        paddingVertical: 20,
      }}
      data={fonts}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: 2}} />
      )}
      renderItem={({item}) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              setSelectedFont(item);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 18,
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: item.use.toString(),
                }}>
                {item.name}
              </Text>
              {selectedFont === item ? (
                <Image
                  source={require('../images/assets/checkblack.png')}
                  style={{alignSelf: 'center'}}
                />
              ) : null}
            </View>
          </TouchableWithoutFeedback>
        );
      }}
    />
  );

  const ListColor = () => (
    <ScrollView>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
          flexGrow: 4,
        }}>
        {colors.map((color: Color) => {
          return (
            <TouchableWithoutFeedback
              key={color.color.toString()}
              onPress={() => setSelectedColor(color)}>
              <View
                style={{
                  flexBasis: '20.1%',
                  marginVertical: 5,
                  height: 140,
                  backgroundColor: color.color.toString(),
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                {selectedColor === color ? (
                  <Image
                    source={require('../images/assets/check.png')}
                    style={{alignSelf: 'center'}}
                  />
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <SharedElement id={'header'} style={styles.sharedElementHeader}>
        <Animated.View
          style={[
            styles.header,
            {
              opacity: opacityHeader.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleWelcome}>Welcome back!</Text>
            <Text style={styles.headerTitleName}>saki</Text>
          </View>
          <View style={styles.headerImage}>
            <Text style={styles.headerImageText}>js</Text>
          </View>
        </Animated.View>
      </SharedElement>
      <SharedElement id={story.id.toString()}>
        <Animated.Image
          style={[
            styles.imageFullScreen,
            {
              transform: [
                {
                  translateY: translateYImageFullScreen.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -height - STATUSBAR_HEIGHT],
                  }),
                },
              ],
            },
          ]}
          source={story.cover}
          resizeMode="cover"
        />
      </SharedElement>
      <ScrollView style={styles.scrollView}>
        <Animated.Image
          source={story.cover}
          style={[
            styles.image,
            {
              transform: [
                {
                  translateY: translateYImage.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height - STATUSBAR_HEIGHT, 0],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.storyMarginTop,
            {
              transform: [
                {
                  translateY: opacityText.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 0, -40],
                  }),
                },
                {
                  scaleY: opacityText.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [0, 0, 1],
                  }),
                },
              ],
              opacity: opacityText.interpolate({
                inputRange: [0, 0.1, 1],
                outputRange: [0, 1, 1],
              }),
              backgroundColor:
                selectedColor === null
                  ? '#ffffff'
                  : selectedColor.color.toString(),
            },
          ]}
        />
        <Animated.Text
          style={[
            styles.storyText,
            {
              opacity: opacityText.interpolate({
                inputRange: [0, 0.7, 1],
                outputRange: [0, 0.5, 1],
              }),
              backgroundColor:
                selectedColor === null
                  ? '#ffffff'
                  : selectedColor.color.toString(),
              color: selectedColor === null ? '#000000' : '#ffffff',
              fontFamily: selectedFont.use.toString(),
            },
          ]}>
          {story.story}
        </Animated.Text>
      </ScrollView>
      <Animated.View
        style={[
          styles.buttonOptions,
          {
            opacity: opacityText.interpolate({
              inputRange: [0, 0.1, 1],
              outputRange: [0, 1, 1],
            }),
          },
        ]}>
        <TouchableWithoutFeedback
          style={styles.buttonOptionTouchable}
          onPress={() => OpenModal()}>
          <Image
            source={require('../images/assets/layer.png')}
            style={styles.buttonImage}
          />
        </TouchableWithoutFeedback>
      </Animated.View>
      <Modalize
        ref={modalizeRef}
        modalHeight={MODAl_SIZE.modal_height}
        handleStyle={stylesModal.handle}
        overlayStyle={stylesModal.overlay}
        closeAnimationConfig={{timing: {duration: 800}}}
        openAnimationConfig={{timing: {duration: 800}}}
        modalStyle={stylesModal.modal}>
        <View style={stylesModal.header}>
          <TouchableWithoutFeedback
            style={stylesModal.touchableImage}
            onPress={() => {
              openContent(1);
            }}>
            <Image
              source={
                modalChoice === 1
                  ? require('../images/assets/layer6.png')
                  : require('../images/assets/layer4.png')
              }
              style={stylesModal.imageMenuModal}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={stylesModal.touchableImage}
            onPress={() => {
              openContent(2);
            }}>
            <Image
              source={
                modalChoice === 2
                  ? require('../images/assets/layer5.png')
                  : require('../images/assets/layer1.png')
              }
              style={stylesModal.imageMenuModal}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require('../images/assets/layer2.png')}
              style={stylesModal.imageMenuModal}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Image
              source={require('../images/assets/layer3.png')}
              style={stylesModal.imageMenuModal}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={stylesModal.containerContent}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: animatedModal.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, MODAL_CONTAINER_HEIGHT],
                  }),
                },
              ],
            }}>
            {modalChoice === 1 ? (
              <ListFont />
            ) : modalChoice === 2 ? (
              <ListColor />
            ) : null}
          </Animated.View>
        </View>
      </Modalize>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  sharedElementHeader: {zIndex: 5},
  imageFullScreen: {
    position: 'absolute',
    zIndex: 9,
    width: width,
    height: height + STATUSBAR_HEIGHT,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: width,
    height: 115,
    backgroundColor: '#fff',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: STATUSBAR_HEIGHT,
  },
  headerTitle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerImage: {
    width: 55,
    height: 55,
    backgroundColor: '#5443AF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerImageText: {
    color: '#fff',
    fontSize: 20,
  },
  headerTitleWelcome: {
    fontSize: 17,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  headerTitleName: {
    fontSize: 17,
    marginHorizontal: 5,
    fontFamily: 'PlayfairDisplay-Regular',
  },
  scrollView: {
    zIndex: -2,
  },
  image: {
    width: width,
    height: width / 0.79,
    resizeMode: 'stretch',
  },
  storyMarginTop: {
    width: width,
    height: 40,
  },
  storyText: {
    marginTop: -40,
    paddingTop: 6,
    fontSize: 18,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  buttonOptions: {
    width: 65,
    height: 65,
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#5443AF',
    borderRadius: 65,
    justifyContent: 'center',
  },
  buttonOptionTouchable: {
    width: '100%',
    height: '100%',
  },
  buttonImage: {
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
});

const stylesModal = StyleSheet.create({
  handle: {height: 0},
  overlay: {backgroundColor: 'rgba(0, 0, 0, 0)'},
  imageMenuModal: {
    width: 25,
    height: 25,
  },
  modal: {
    backgroundColor: '#5443AF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    height: MODAl_SIZE.header_height,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerContent: {
    backgroundColor: 'white',
    width: width,
    height: MODAL_CONTAINER_HEIGHT,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  touchableImage: {
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
});

StoryScreen.sharedElements = (route: any) => {
  const story: Story = route.params.item;
  return [
    {
      id: story.id.toString(),
      animation: 'fade',
    },
    {
      id: 'header',
      animation: 'fade',
    },
  ];
};

export default StoryScreen;
