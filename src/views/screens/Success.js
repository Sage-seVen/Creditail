import {StyleSheet, Text, View, Image} from 'react-native';
import COLORS from '../../constants/colors';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/success.png')}
      />
      <Text style={styles.heading}>Onboarding Successfull</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.success,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    height: 24,
    color: 'white',
    marginTop: 24,
  },
  image: {
    height: 114,
    width: 114,
  },
});

export default Success;
