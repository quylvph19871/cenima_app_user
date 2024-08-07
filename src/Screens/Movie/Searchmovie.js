import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import { Image } from 'react-native-animatable';

const Searchmovie = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const moviesData = [
    { id: '1', name: 'Inception', genre: 'Sci-Fi', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '2', name: 'The Shawshank Redemption', genre: 'Drama', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '3', name: 'The Dark Knight', genre: 'Action', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '4', name: 'Forrest Gump', genre: 'Drama', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '5', name: 'Pulp Fiction', genre: 'Crime', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '6', name: 'Interstellar', genre: 'Sci-Fi', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '7', name: 'The Godfather', genre: 'Crime', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '8', name: 'The Matrix', genre: 'Sci-Fi', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '9', name: 'The Lion King', genre: 'Animation', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    { id: '10', name: 'The Avengers', genre: 'Action', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    // Thêm các bộ phim khác vào đây
  ];

  const handleSearch = () => {
    const results = moviesData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleMovie = (item) => {
    navigation.navigate('Movie', { item });
  };
  return (
    <View style={styles.project}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Movie</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', backgroundColor: 'rgba(98, 131, 161, 1)', width: 350, height: 35, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(121, 110, 177, 1)' }}>
          <View>
            <TextInput
              style={{ width: 320, height: 35, color: 'white' }}
              placeholder="Nhập tên phim.........."
              placeholderTextColor="white"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={handleSearch}>
              <Icon name="search" size={20} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ margin: 20 }}>
                <TouchableOpacity onPress={() => handleMovie(item)}>
                  <View style={{ flexDirection: 'row', width: 320, height: 90 }}>
                    <Image source={{ uri: item.imageUri }} style={{ width: 70, height: 88, borderRadius: 10 }}></Image>
                    <View style={{ marginLeft: 10, width: 250, height: 55 }}>
                      <Text style={{ color: 'white', marginBottom: 10, marginTop: 8, fontSize: 17 }}>{item.name}</Text>
                      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 10 }}>Thể loại phim: </Text>
                        <Text style={{ color: 'rgba(255, 230, 0, 0.8)', fontSize: 10 }}>{item.genre}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <Icon name="film" size={14} color={'white'} />
                        <Text style={{ color: 'rgba(255, 230, 0, 0.8)', fontSize: 10, marginLeft: 10 }}>80 giờ 80 phút</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ borderBottomWidth: 2, borderColor: 'white', marginTop: 20 }}></View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Searchmovie

const styles = StyleSheet.create({
  project: {
    backgroundColor: 'rgba(68, 89, 109, 1)',
    flex: 1,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    // top: 5,
    // left: 10,
    // backgroundColor: 'rgba(248, 94, 94, 1)',
    height: 40
  },
  img_menu: {
    width: 20,
    height: 20,
    marginRight: 5,
    left: 10
  },
  text: {
    color: 'white',
    left: 10,
  },
})