import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text style={{alignSelf:'flex-end', marginRight:40,marginVertical:20}}>الصور</Text>
        <TouchableOpacity 
         onPress={pickImage} 
         style={{
             flexDirection : 'row',
             justifyContent : 'space-between',
             marginVertical:20
         }}
         >
         <View style={{marginRight:20,marginTop:30}}>
             <Text>يمكن رفع 8 صور</Text>
             <Text>لا يزيد حجم الصور عن 3 م.ب</Text>
         </View>
            <Image source={require('../images/upload.png')}/>
        </TouchableOpacity>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
