import { Text, ScrollView, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import store from './app/store'
import { Provider } from "react-redux"
import { addNewTask } from "./features/task/taskSlice"

const Main = () => {
  const tasks = useSelector(state => state.task)
  const dispatch = useDispatch()
  return (
    <ScrollView style={{ padding: 16 }}>
      {/*first row*/}
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: 16}}>
        <View>
          <Image
            source={require("./assets/back.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={{ flexDirection: 'row', gap: 8}}>
          <View>
            <Image
              source={require("./assets/avatar.jpg")}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Hi Twinkle</Text>
            <Text>Have a great day</Text>
          </View>
        </View>
      </View>

      {/*second row*/}
      <View style={{ flexDirection: 'row', alignItems: "center", gap: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 16}}>
        <Image
          source={require("./assets/search.png")}
          style={{width: 16, height: 16}}
        />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, borderWidth: 0 }}
        />
      </View>

      {/*third row*/}
      <View style={{marginBottom: 24}}>
        <FlatList
          contentContainerStyle={{ gap: 16}}
          data={tasks}
          renderItem={({item: task}) => (
            <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{ flexDirection: "row", gap: 8, alignItems: 'center'}}>
                <Image
                  source={require("./assets/checked.png")}
                  style={{width: 16, height: 16}}
                />
                <Text>{task}</Text>
              </View>
              <View>
                <Image
                  source={require("./assets/edit.png")}
                  style={{ width: 16, height: 16}}
                />
              </View>
            </View>
          )}

        />
      </View>

      {/*fourth row*/}
      <View style={{ flexDirection: 'row', justifyContent: 'center' ,alignItems: "center"}}>
        <TouchableOpacity onPress={() => {dispatch(addNewTask("NEW TASK"))}} style={{backgroundColor: "cyan", padding: 16, borderRadius: 999}}>
          <Image
            source={require("./assets/plus.png")}
            style={{width: 16, height: 16}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default function App() {

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}
