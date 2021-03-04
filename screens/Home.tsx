import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Animated,
  View,
  Text,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {
  FULL_ITEM_SIZE,
  height,
  ITEM_SIZE,
  STATUSBAR_HEIGHT,
  width,
} from '../utils/constant';
import {Story, storys} from '../utils/db';

const Home = ({navigation}: {navigation: any}) => {
  const [scale] = useState<Animated.Value>(new Animated.Value(0));
  const [rotate] = useState<Animated.Value>(new Animated.Value(0));
  const [itemView, setItemView] = useState<number | null>(0);
  const ref = useRef<FlatList>(null);

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
    Animated.spring(rotate, {
      toValue: 1,
      speed: 1,
      bounciness: 1,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndexFlatList = (index: number) => {
    ref.current?.scrollToIndex({
      animated: true,
      index: index,
      viewOffset: FULL_ITEM_SIZE / 2,
    });
    setItemView(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <SharedElement
        id={'header'}
        style={{transform: [{translateX: -width / 2}], zIndex: 3}}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleWelcome}>Welcome back!</Text>
            <Text style={styles.headerTitleName}>saki</Text>
          </View>
          <View style={styles.headerImage}>
            <Text style={styles.headerImageText}>js</Text>
          </View>
        </View>
      </SharedElement>
      <FlatList
        onMomentumScrollEnd={(event) => {
          const yOffset = event.nativeEvent.contentOffset.y;
          const value = yOffset / FULL_ITEM_SIZE;
          setItemView(Math.floor(value));
        }}
        ref={ref}
        data={storys}
        showsVerticalScrollIndicator={false}
        snapToInterval={FULL_ITEM_SIZE + STATUSBAR_HEIGHT}
        collapsable={false}
        keyExtractor={(story: Story) => story.id.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableWithoutFeedback
              style={[
                {
                  marginTop:
                    index === 0
                      ? (height - FULL_ITEM_SIZE) / 2 + STATUSBAR_HEIGHT
                      : ITEM_SIZE.margin + STATUSBAR_HEIGHT,
                  marginBottom:
                    index === storys.length - 1
                      ? (height - FULL_ITEM_SIZE) / 2
                      : ITEM_SIZE.margin,
                },
              ]}
              onPress={() => {
                if (itemView === index) {
                  navigation.push('StoryScreen', {item});
                } else {
                  scrollToIndexFlatList(index);
                }
              }}>
              <SharedElement id={item.id.toString()}>
                <Animated.Image
                  style={[
                    styles.image,
                    {
                      transform: [
                        {
                          scale: scale.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0.7, 1],
                          }),
                        },
                        {
                          rotate: rotate.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['-90deg', '0deg'],
                          }),
                        },
                      ],
                    },
                  ]}
                  source={item.cover}
                  resizeMode="cover"
                />
              </SharedElement>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: ITEM_SIZE.cover_width,
    height: ITEM_SIZE.cover_width,
    borderRadius: ITEM_SIZE.cover_width,
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
});

export default Home;
