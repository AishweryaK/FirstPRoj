import React, {useState} from "react";
import {SafeAreaView,StyleSheet, Text, TouchableOpacity} from "react-native";

function App () {
  const [count, setCount]=useState(0);

  const increment = () =>
  {
    setCount(count+1)
  }
  const decrement = () =>
  {
    setCount(count-1)
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress= {decrement}>
        <Text>
          -
        </Text>
        </TouchableOpacity>
      <Text>
        Count is {count}
      </Text>
      <TouchableOpacity onPress= {increment}>
      <Text>
          +
        </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )

}

const styles= StyleSheet.create(
  {
    container: {
      justifyContent: "center",

    }
  }
)

export default App;
