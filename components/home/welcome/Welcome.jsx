import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
}
  from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES, } from '../../../constants'
import CustomCard from '../../common/cards/CustomCard';
const jobType = ['Full-time', 'Part-time', 'Contract-', '-time', '-Type']

const Welcome = () => {
  const router = useRouter();

    const [activeJobType,setactiveJobType]=useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Gabe</Text>
        <Text style={styles.welcomeMessage}>Find the perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='what are you looking for ' />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobType}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType , item)}
              onPress={()=>{
                setactiveJobType(item);
                router.push(`/search/${item}`)
              }}
              
           >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor = {item=> item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}

        />

      </View>

<CustomCard 
/>

    </View>
  )
}


export default Welcome