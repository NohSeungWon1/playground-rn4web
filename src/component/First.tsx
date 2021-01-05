import { View,Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeText } from '../reduxs/reducer';

const First = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => {
    return state.msg
  });
  return (
    <View>
      <Text>{state? state : 'not yet'}</Text>
      <Button title="change" onPress={() => {dispatch(changeText('world'))}}></Button>
    </View>
  );
}

export default First;