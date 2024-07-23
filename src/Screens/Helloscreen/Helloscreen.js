import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

const Helloscreen = ({ navigation }) => {
  // useEffect(() => {
  //     setTimeout(() => {
  //         navigation.navigate('Login')           
  //     }, 4000);
  // }, [])
  const handleDone = () => {
    navigation.navigate('Login')
  }
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} style={styles.doneButton}>
        <Text style={styles.buttonproject}>Tiếp tục</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.project}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        pages={[
          {
            backgroundColor: 'rgba(221, 57, 57, 1)',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../folder/Animation - 1721636521037.json')} autoPlay loop />
              </View>
            ),
            title: 'FPT CINEMA',
            subtitle: 'Mang đến trải nghiệm tuyệt vời nhất',
          },
          {
            backgroundColor: 'orange',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../folder/Animation - 1721645579827.json')} autoPlay loop />
              </View>
            ),
            title: 'FPT CINEMA',
            subtitle: 'Cung cấp các thể loại đa dạng',
          },
          {
            backgroundColor: 'purple',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../folder/Animation - 1721636521037.json')} autoPlay loop />
              </View>
            ),
            title: 'FPT CINEMA',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: 'rgba(112, 204, 255, 1)',
            image: (
              <View style={styles.lottie}>
                <Lottie source={require('../folder/Animation - 1721645579827.json')} autoPlay loop />
              </View>
            ),
            title: 'FPT CINEMA',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  )
}

export default Helloscreen

const styles = StyleSheet.create({
  project: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: 200,
    height: 200,
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 70,
    borderBottomLeftRadius: 10,
  },
  buttonproject: {
    color: 'black',
    marginLeft: 4,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
})