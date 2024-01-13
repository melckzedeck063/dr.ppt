import { View, Text } from 'react-native'
import React from 'react'
import { Button, FormControl, Input, VStack } from 'native-base';


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
  
    return ( <VStack width="90%" mx="3" maxW="300px" bg="white" p={1}>
        <FormControl isRequired isInvalid={'name' in errors}>
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
        
        <FormControl isRequired isInvalid={'desc' in errors}>
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
      </VStack>
    )
}
  
