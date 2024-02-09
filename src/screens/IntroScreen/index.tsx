import React from 'react';
import { Layout } from 'app/components/Layout';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { EnumColors } from 'app/types';
import { BlurView } from '@react-native-community/blur';

// @ts-ignore
export const IntroScreen = ({ navigation }) => {
  return (
    <Layout>
      <View style={styles.intro}>
        <Image source={require('../../../assets/intro.webp')} style={styles.introImg} />
        <View style={styles.introInfo}>
          <Text style={styles.introInfoTitle}>Your style tell about you</Text>
          <Text style={styles.introInfoText}>There are many clothes with designs that are suitable for you today</Text>
        </View>
        <View style={styles.introBarContainer}>
          <BlurView blurType="light" blurAmount={6} style={styles.introBar}>
            <Pressable style={styles.introBtn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.introBtnText}>Go To Home</Text>
            </Pressable>
          </BlurView>
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
    width: '100%',
    height: 115,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
  },

  introBar: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
  },

  introBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: EnumColors.white,
    borderRadius: 10,
  },

  introBtnText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: EnumColors.black,
  },
});
