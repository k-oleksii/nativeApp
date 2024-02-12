import React, { useState } from 'react';
import { Layout } from 'app/components/Layout';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { EnumColors } from 'app/types';
import { BlurView } from '@react-native-community/blur';

// @ts-ignore
export const IntroScreen = ({ navigation }) => {
  const [scaleValue] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('Main');
    }, 100);
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 1,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Layout>
      <View style={styles.intro}>
        <Image source={require('../../../assets/intro.webp')} style={styles.introImg} />
        <View style={styles.introInfo}>
          <Text style={styles.introInfoTitle}>Your style tell about you</Text>
          <Text style={styles.introInfoText}>There are many clothes with designs that are suitable for you today</Text>
        </View>

        <View style={styles.introBarContainer}>
          <BlurView blurType="light" blurAmount={4} overlayColor="transparent" style={styles.introBar} />
          <Animated.View style={animatedStyle}>
            <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={styles.introBtn}>
              <Text style={styles.introBtnText}>Go To Home</Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  intro: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },

  introImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    flex: 1,
    width: '100%',
    aspectRatio: 1,
  },
  introInfo: {
    width: '85%',
    paddingHorizontal: 14,
    paddingVertical: 24,
  },

  introInfoTitle: {
    marginBottom: 10,
    fontFamily: 'ZenDots-Regular',
    fontSize: 40,
    lineHeight: 60,
    color: EnumColors.white,
  },

  introInfoText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 24,
    color: EnumColors.white,
  },

  introBarContainer: {
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 115,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
  },

  introBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  introBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: EnumColors.white,
    borderRadius: 10,
  },

  introBtnText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    lineHeight: 18,
    color: EnumColors.black,
  },
});
