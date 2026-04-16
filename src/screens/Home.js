import {
    Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { addItem } from '../dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../contactsSlice';
import {addPaymets} from '../paymentSlice'
import RazorpayCheckout from 'react-native-razorpay';
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const [isName, setIsName] = useState('');
  const [isDiscription, setDiscription] = useState('');
  const [isPrice, setIsPrice] = useState('');

  const contacts = useSelector(state => state.contacts.list);

  const btnAdd = () => {
    setModalVisible(false);
    // setDataList([...dataList, { isName, isDiscription, isPrice }]);

    if (isName && isDiscription && isPrice) {
      dispatch(addContact({ isName, isDiscription, isPrice }));
      setIsName('');
      setDiscription('');
      setIsPrice('');
    }
    else {
        Alert.alert('All fild is required')
    }
  };

  const btnPayment = (item) => { 

    console.log("item",item)
     var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_Se2bShty5j5OIx', // Your api key
    amount: `${item?.isPrice * 100}`,
    name: 'foo',
    prefill: {
      email: 'void@razorpay.com',
      contact: '9191919191',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }


   RazorpayCheckout.open(options).then((data) => {
    navigation.navigate('ProductTab' , {item : item})
      dispatch(addPaymets({item}));

    // handle success
    Alert.alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    Alert.alert(`Error: ${error.code} | ${error.description}`);
  });


  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => btnPayment(item)} style={styles.listStyle}>
        <Text>{item.isName}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <Text>{item.isDiscription}</Text>
          <Text>Price : {item.isPrice}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.btnAdd}
      >
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>

      <FlatList data={contacts} renderItem={renderItem} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TextInput
              value={isName}
              placeholder="Product Name"
              style={styles.inputBox}
              onChangeText={t => setIsName(t)}
            />
            <TextInput
              value={isDiscription}
              placeholder="Product Discription"
              style={styles.inputBox}
              onChangeText={t => setDiscription(t)}
            />
            <TextInput
              value={isPrice}
              style={styles.inputBox}
              placeholder="Product Price"
              keyboardType="number-pad"
              onChangeText={t => setIsPrice(t)}
            />

            <Button title="Add" onPress={btnAdd} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    // flex: 1,
    height: '100%',
  },
  listStyle: {
    backgroundColor: '#FFFFF7',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    // flex:1
  },
  btnAdd: {
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    backgroundColor: 'blue',
    height: 48,
    justifyContent: 'center',
    width: 48,
    borderRadius: 50,
    // top: 800,
    right: 0,
    // bottom:10,
    // left:10
  },
  btnText: {
    color: '#ffff',
    textAlign: 'center',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    width: '90%',
    height: 48,
    marginVertical: 10,
    borderRadius: 10,
    paddingStart: 10,
  },
});
