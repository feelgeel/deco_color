import React from 'react';
import { View,StyleSheet } from 'react-native';
import C_Form from './../components/C_Form';
import C_FormField from './../components/C_FormField';
import C_SubmitButton from './../components/C_SubmitButton';
import * as Yup from "yup"
const listOrderValidSchema = Yup.object().shape({
    quantity: Yup.number().required().label("quantity"),
  })
const Calculatekilos = () => {
return (
 <View>
   <C_Form
      initialValues={{quantity:""}}
      onSubmit={(values)=>{
          console.log(values)
       }}
      validationSchema={listOrderValidSchema}
      >
      <C_FormField
          name="quantity"
         //  icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          placeholder="qunatity"
          />
      <C_SubmitButton title='submit' />
      </C_Form>
 </View>
  );
};


const styles = StyleSheet.create({

 });
export default Calculatekilos;