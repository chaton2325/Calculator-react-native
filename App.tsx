import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


export default function App() {
  let [count , setCount] = useState(0);
  let [input , setInput] = useState('');



  return (
    <View style={styles.container}>
      <Text style={styles.teststyle}>{input}</Text>
      <View style={styles.buttonContainer}>
        <Button title = "7               " color = "green" onPress={()=>setInput(input + "7") }   />
        <Button title = "8               " color="blue" onPress={()=>setInput(input + "8")}/>
        <Button title = "9               " color="purple" onPress={()=>setInput(input + "9")}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title = "4               " color = "green" onPress={()=>setInput(input + "4")}/>
        <Button title = "5               " color="blue" onPress={()=>setInput(input + "5")}/>
        <Button title = "6               " color="purple" onPress={()=>setInput(input + "6")}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title = "1               " color = "green" onPress={()=>setInput(input + "1")}/>
        <Button title = "2               " color="blue" onPress={()=>setInput(input + "2")}/>
        <Button title = "3               " color="purple" onPress={()=>setInput(input + "3")}/>
        
      </View>
      <View style={styles.buttonContainer}>
        <Button title = "+               " color = "green" onPress={()=>setInput(input + "+")}/>
        <Button title = "-               " color="blue" onPress={()=>setInput(input + "-")}/>
        <Button title = "=               " color="purple" onPress={()=>setInput(eval(input.toString()))}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button title = "*               " color = "green" onPress={()=>setInput(input + "*")}/>
        <Button title = "/               " color="blue" onPress={()=>setInput(input + "/")}/>
        <Button title = "C               " color="purple" onPress={()=>setInput("")} />
        
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  teststyle: {
    color: 'black',
    fontSize : 65
  },
  inputstyle: {
    backgroundColor : "red",
    fontSize : 20,
    width : 300,
    height: 50,
  },
  buttonContainer : {
    flexDirection : "row",
    justifyContent : "center" ,
    width: 200,
    height: 100,
    padding : 5,


    
   
  },
  button : {
    width : 20,
    height : 30,
  }

});
