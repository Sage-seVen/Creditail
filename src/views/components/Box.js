import {
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import React, {useState, useRef} from 'react';
import COLORS from '../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const OTPBox = ({handleSubmitOtp}) => {
  const refer1 = useRef();
  const refer2 = useRef();
  const refer3 = useRef();

  const [otp, setOtp] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const authenticateOtp = () => {
    const otpValue = otp.reduce((acc, val) => acc + val, '');
    setSubmitted(true);
    if (otpValue.length === 4) {
      handleSubmitOtp(otpValue);
    } else {
      //throw an alert here
    }
    setTimeout(() => setSubmitted(false), 3000); //mimic api call
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="next"
          maxLength={1}
          onChangeText={value => {
            setOtp([...otp, value]);
            if (value) refer1.current.focus();
          }}
          onSubmitEditing={() => {
            refer1.current.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="next"
          maxLength={1}
          ref={refer1}
          onChangeText={value => {
            setOtp([...otp, value]);
            if (value) refer2.current.focus();
          }}
          onSubmitEditing={() => {
            refer2.current.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          returnKeyType="next"
          maxLength={1}
          ref={refer2}
          onChangeText={value => {
            setOtp([...otp, value]);
            if (value) refer3.current.focus();
          }}
          onSubmitEditing={() => {
            refer3.current.focus();
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          ref={refer3}
          returnKeyType="next"
          onChangeText={value => {
            setOtp([...otp, value]);
          }}
          onSubmitEditing={() => {
            authenticateOtp();
          }}
        />
      </View>
      <TouchableHighlight style={styles.submitView} onPress={authenticateOtp}>
        {submitted ? (
          <ActivityIndicator size="small" color="#1E1E1E" />
        ) : (
          <Image
            style={styles.submitImage}
            source={require('../../assets/arrow.png')}
          />
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  box: {
    flexDirection: 'row',
    height: 48,
    width: 48,
    marginRight: 20,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    opacity: 0.7,
  },
  input: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  submitView: {
    backgroundColor: COLORS.white,
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: 'center',
    marginLeft: 16,
  },
  submitImage: {
    width: 20,
    height: 17,
    alignSelf: 'center',
  },
});

export default OTPBox;
