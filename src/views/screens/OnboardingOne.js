import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import COLORS from '../../constants/colors';
import Btn from '../components/Button';
import Input from '../components/Input';

const OnboardingOne = ({navigation}) => {
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    aadhaar: '',
    pan: '',
    dob: '',
  });

  const [errors, setErrors] = React.useState({});
  const [allowContinue, setAllowContinue] = React.useState(false);
  const [showDob, setShowDob] = React.useState(false);

  const refArr = Array(5).fill(React.useRef());

  const handleOnchange = (text, input) => {
    setUserData(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  var isValidated = false;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(errors);
  //     if (Object.entries(errors).forEach(entry => entry === null)) {
  //       console.log('error free u r ');
  //     }
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  handleValidateName = () => {
    if (!userData.name) {
      handleError('Please input name', 'name');
    } else {
      isValidated = true;
    }
  };

  handleValidateEmail = () => {
    if (!userData.email) {
      handleError('Please input email', 'email');
    } else if (!userData.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
    } else {
      isValidated = true;
    }
  };
  handleValidateAadhaar = () => {
    if (!userData.aadhaar) {
      handleError('Please input Aadhaar', 'aadhaar');
    } else if (!userData.aadhaar.match(/^[0-9]{4}[0-9]{4}[0-9]{4}$/)) {
      handleError('Please input a valid Aadhaar', 'aadhaar');
    } else {
      isValidated = true;
    }
  };
  handleValidatePan = () => {
    if (!userData.pan) {
      handleError('Please input PAN', 'pan');
    } else if (!userData.pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
      handleError('Please input a valid PAN', 'pan');
    } else {
      setShowDob(true);
      isValidated = true;
    }
  };

  handleValidateDob = () => {
    if (!userData.dob) {
      handleError('Please input DOB', 'dob');
    } else {
      isValidated = true;
      if (isValidated) setAllowContinue(true);
    }
  };

  handleContinue = () => {
    navigation.navigate('OnboardingTwo');
    if (isValidated && allowContinue) {
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 16}}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            paddingHorizontal: 16,
          }}>
          Welcome to Creditail
        </Text>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.heading}> Step 1 </Text>
        <Text style={styles.subHeading}> Please enter your details </Text>
        <View style={styles.inputFormView}>
          <Input
            onChangeText={text => handleOnchange(text, 'name')}
            onFocus={() => handleError(null, 'name')}
            onSubmitEditing={() => handleValidateName()}
            iconName="email-outline"
            iconVisibilty={userData.name !== '' && errors.name === null}
            label="Shop owner name"
            placeholder="Enter store owner name"
            error={errors.name}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            onSubmitEditing={() => handleValidateEmail()}
            iconName="email-outline"
            label="Email Address"
            placeholder="abcdefgh@gmail.com"
            keyboardType="email-address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'aadhaar')}
            onFocus={() => handleError(null, 'aadhaar')}
            onSubmitEditing={() => handleValidateAadhaar()}
            iconName="email-outline"
            label="Aadhaar Number"
            placeholder="1234 5678 0123"
            keyboardType="numeric"
            error={errors.aadhaar}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'pan')}
            onFocus={() => handleError(null, 'pan')}
            onSubmitEditing={() => handleValidatePan()}
            iconName="email-outline"
            label="PAN Number"
            placeholder="ABCDE1234F"
            error={errors.pan}
          />
          {showDob && (
            <Input
              onChangeText={text => handleOnchange(text, 'dob')}
              onFocus={() => handleError(null, 'dob')}
              onSubmitEditing={() => handleValidateDob()}
              iconName="email-outline"
              label="Date of Birth"
              placeholder="DD/MM/YY"
              error={errors.dob}
            />
          )}
        </View>
      </ScrollView>
      <Btn
        bgColor={allowContinue ? COLORS.primaryBlue : COLORS.disabled}
        textColor={allowContinue ? COLORS.white : 'black'}
        btnLabel="Continue"
        disabled={!allowContinue}
        Press={() => {
          handleContinue();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  inputFormView: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  logo: {
    width: 89,
    height: 89,
    alignSelf: 'center',
    marginVertical: 8,
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

export default OnboardingOne;
