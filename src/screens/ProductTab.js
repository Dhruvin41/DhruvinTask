import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

const ProductTab = ({ route }) => {
  const { item } = route.params || {};
  console.log('item', item);
  //   const contacts = useSelector(state => state.contacts.payment);

  //   console.log("contacts",contacts)
  return (
    <View>
      <TouchableOpacity>
        <Text>{item?.isName}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}
        >
          <Text>{item?.isDiscription}</Text>
          <Text>{item?.isPrice}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductTab;

const styles = StyleSheet.create({});
