import { View, Text, TextInput, Button, Image } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{
          width: 200,
          height: 200
        }}
      />

      <Text>Digite o E-mail</Text>
      <TextInput placeholder="fulano@hotmail.com" />

      <Text>Digite a senha</Text>
      <TextInput placeholder="abc@123" />

      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}