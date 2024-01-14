import { View, Text,Platform } from 'react-native'
import React from 'react'
import { Button, FormControl, Input, KeyboardAvoidingView, VStack,HStack, Box } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import tw from 'twrnc'

export default function ServiceForm() {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
  
    const validate = () => {
      if (formData.name === undefined) {
        setErrors({ ...errors,
          name: 'Name is required'
        });
        return false;
      } else if (formData.name.length < 3) {
        setErrors({ ...errors,
          name: 'Name is too short'
        });
        return false;
      }

      if (formData.desc === undefined) {
          setErrors({ ...errors,
            desc: 'desc is required'
          });
          return false;
        } else if (formData.desc.length < 3) {
          setErrors({ ...errors,
            desc: 'Name is too short'
          });
          return false;
        }
  
      return true;
    };

  

  
    const onSubmit = () => {
      validate() ? console.log('Submitted') : console.log('Validation Failed');
    };
  
    return ( 
<>
      
      {/* <Box width="49%" mx="1" maxW="300px" bg="white"> */}
        <View style={tw`flex-row justify-between`} >
        <FormControl isRequired isInvalid={'name' in errors} mx="0.5" width="47%" >
          <FormControl.Label _text={{
          bold: true
        }}>Service Name</FormControl.Label>
          <Input placeholder="John" color="black" onChangeText={value => setData({ ...formData,
          name: value
        })} />
          {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>

        <FormControl isRequired isInvalid={'price' in errors}  width="47%"  >
          <FormControl.Label _text={{
          bold: true
        }}>Price</FormControl.Label>
          <Input placeholder="" color="black" onChangeText={value => setData({ ...formData,
          price: value
        })} />
          {'desc' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>

        </View>
        
        <FormControl isRequired isInvalid={'desc' in errors} width="96%" >
          <FormControl.Label _text={{
          bold: true
        }}>Description</FormControl.Label>
          <Input placeholder="John" color="black" onChangeText={value => setData({ ...formData,
          desc: value
        })} />
          {'desc' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
              Name should contain atleast 3 character.
            </FormControl.HelperText>}
        </FormControl>

        <Button onPress={onSubmit} mt="5" colorScheme="cyan">
          Submit
        </Button>
      {/* </Box> */}
      </>
    )
}
  
