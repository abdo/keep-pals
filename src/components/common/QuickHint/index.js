import { Toast } from 'native-base';

// import { colors } from '../../../assets/styles/base';

const QuickHint = (content) =>
  Toast.show({
    text: content,
    // position: 'bottom',
    // hideOnPress: true,
    duration: 1500,
    // animation: 'fade',
    // styles: {
    //   message: {
    //     color: colors.primaryLight,
    //     backgroundColor: colors.black,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     padding: 10,
    //     borderRadius: 5,
    //   },
    // },
  });

export default QuickHint;
