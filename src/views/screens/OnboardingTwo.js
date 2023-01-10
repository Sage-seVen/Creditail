import {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../constants/colors';
import OTPBox from '../components/Box';
import PDFView from '../components/PdfView';

const OnboardingTwo = ({navigation}) => {
  useEffect(() => {
    console.log('run once oka');
    //call request otp here
  }, []);

  const handleSubmitOtp = otpValue => {
    if (otpValue === '1234') {
      console.log('viola you are authenticated');
      //call api to authenticate
      navigation.navigate('Success');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView contentContainerStyle={{paddingTop: 50}}> */}
      <View style={styles.formView}>
        <Text style={styles.heading}> Step 2 </Text>
        <Text style={styles.subHeading}> Please enter your details </Text>
        <Text
          style={{
            color: 'black',
            alignSelf: 'center',
            position: 'absolute',
            top: '50%',
          }}>
          Form
        </Text>
        <PDFView />
      </View>
      <View style={styles.otpView}>
        <Text style={[styles.heading, {color: COLORS.white}]}>Enter OTP</Text>
        <OTPBox handleSubmitOtp={handleSubmitOtp} />
        <Text
          style={[
            styles.subHeading,
            {color: COLORS.white, fontSize: 12, marginTop: 0},
          ]}>
          Didn’t get the code yet?
        </Text>
        <TouchableOpacity onPress={() => console.log('i ma pressed')}>
          <Text
            style={[
              styles.subHeading,
              {color: COLORS.white, fontSize: 14, marginTop: 0},
            ]}>
            RESEND
          </Text>
        </TouchableOpacity>
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    flex: 1,
  },
  formView: {
    flex: 1,
    paddingHorizontal: 28,
  },
  otpView: {
    backgroundColor: COLORS.primaryBlue,
    height: 192,
    paddingHorizontal: 22,
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    height: 24,
    color: 'black',
    marginTop: 24,
  },
  subHeading: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    height: 24,
    color: 'black',
    marginTop: 8,
  },
});

export default OnboardingTwo;
