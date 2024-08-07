import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Trendingmovie from '../../component/Trendingmovie';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Listmovie = ({ navigation }) => {
    const WIDTH = Dimensions.get('screen').width
    const ITEM_WIDTH = (WIDTH * 0.73)
    const MOVIE_SPACER_WIDTH = (WIDTH - ITEM_WIDTH) / 2
    const scrollX = useRef(new Animated.Value(0)).current
    const SLIDE_DURATION = 3000;

    const data = [
        { id: 1, name: 'Phim 1', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' },
        { id: 2, name: 'Phim 2', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' },
        { id: 3, name: 'Phim 3', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' },
        { id: 4, name: 'Phim 4', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' },
        { id: 5, name: 'Phim 5', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' },
        { id: 6, name: 'Phim 6', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' }
    ];

    const dataListmovie = [
        { id: 1, name: 'Jurassic Park', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 1000},
        { id: 2, name: 'Phim 2', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 250 },
        { id: 3, name: 'Phim 3', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 200 },
        { id: 4, name: 'Phim 4', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 10 },
        { id: 5, name: 'Phim 5', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 800 },
        { id: 6, name: 'Phim 6', imageUri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg', votes: 40 },
        { id: 7, name: 'Phim 7', imageUri: 'https://example.com/image7.jpg', votes: 6 },
        { id: 8, name: 'Phim 8', imageUri: 'https://example.com/image8.jpg', votes: 8 },
        { id: 9, name: 'Phim 9', imageUri: 'https://example.com/image9.jpg', votes: 0 },
        { id: 10, name: 'Phim 10', imageUri: 'https://example.com/image10.jpg', votes: 0 },
        { id: 11, name: 'Phim 11', imageUri: 'https://example.com/image11.jpg', votes: 0 },
        { id: 12, name: 'Phim 12', imageUri: 'https://example.com/image12.jpg', votes: 0 },
        { id: 13, name: 'Phim 13', imageUri: 'https://example.com/image13.jpg', votes: 0 },
        { id: 14, name: 'Phim 14', imageUri: 'https://example.com/image14.jpg', votes: 0 },
        { id: 15, name: 'Phim 15', imageUri: 'https://example.com/image15.jpg', votes: 0 },
        { id: 16, name: 'Phim 16', imageUri: 'https://example.com/image16.jpg', votes: 0 },
        { id: 17, name: 'Phim 17', imageUri: 'https://example.com/image17.jpg', votes: 0 },
        { id: 18, name: 'Phim 18', imageUri: 'https://example.com/image18.jpg', votes: 0 },
        { id: 19, name: 'Phim 19', imageUri: 'https://example.com/image19.jpg', votes: 0 },
        { id: 20, name: 'Phim 20', imageUri: 'https://example.com/image20.jpg', votes: 4 }
    ];


    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#cccccc' }}>
            <Image source={{ uri: item.imageUri }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 18, color: 'white' }}>{item.name}</Text>
            </View>
        </View>
    );

    const handleMoviePress = (item) => {
        navigation.navigate('Movie', { item });
    };

    const handleNavigateToTickets = (movieName) => {
        navigation.navigate('Tickets', { movieName });
      };

    const sortedMovies = dataListmovie.sort((a, b) => b.votes - a.votes);
    const topMovies = sortedMovies.slice(0, 6);
    const noTopMovies = sortedMovies.slice(6,10);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.project}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../img/menu-burger.png')} style={styles.headerImage} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.headerText}>FPT</Text>
                        <Text style={styles.headerTextPoly}>CINEMA</Text>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2798/2798007.png' }} style={styles.headerImage}></Image>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Searchmovie')}>
                        <Image source={require('../img/search.png')} style={styles.headerImage} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <View style={{ width: '100%', height: 200, borderRadius: 20, overflow: 'hidden' }}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            dotColor='#FFFFFF'
                            activeDotColor='#FFD700'
                            autoplay={true}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_3_.png' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/d/m/dm4_gcard_980x448.jpg' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                            <View style={styles.slide3}>
                                <Image
                                    source={{ uri: 'https://iguov8nhvyobj.vcdn.cloud/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/r/s/rsz_980x448_17.jpg' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <Text style={styles.project_text}>Top Phim</Text>
                    <FlatList
                        data={topMovies}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                        snapToInterval={ITEM_WIDTH}
                        snapToAlignment='start'
                        decelerationRate={0.6}
                        ListHeaderComponent={() => {
                            return (
                                <View style={{ width: MOVIE_SPACER_WIDTH, height: 250 }}></View>
                            )
                        }}
                        ListFooterComponent={() => {
                            return (
                                <View style={{ width: MOVIE_SPACER_WIDTH, height: 250 }}></View>
                            )
                        }}
                        renderItem={({ item, index }) => {
                            const inputRange = [
                                (index - 1) * ITEM_WIDTH,
                                index * ITEM_WIDTH,
                                (index + 1) * ITEM_WIDTH,
                            ]
                            const translateY = scrollX.interpolate({
                                inputRange,
                                outputRange: [50, 0, 50]
                            })
                            return (
                                <Animated.View style={{ width: ITEM_WIDTH, position: 'relative', paddingHorizontal: 25 }}>
                                    <Animated.View style={{ marginHorizontal: 0, height: 260, elevation: 20, borderRadius: 35, transform: [{ translateY: translateY }] }}>
                                        <TouchableOpacity onPress={() => handleMoviePress(item)}>
                                            <Image source={{ uri: 'https://d1j8r0kxyu9tj8.cloudfront.net/images/1566809340Y397jnilYDd15KN.jpg' }} style={{ width: '100%', height: '100%', borderRadius: 35 }} />
                                            <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, alignItems: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                                <Animated.Text style={{ color: 'white', fontSize: 20, letterSpacing: 2, fontWeight: 'bold', textAlign: 'center', opacity: 1, transform: [{ translateY: translateY }] }}>{item.name}</Animated.Text>
                                                <Text style={{ color: 'white', fontSize: 10 }}>127 phút</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </Animated.View>
                                </Animated.View>
                            )
                        }}
                    >
                    </FlatList>
                    <Text style={styles.project_text}>Phim bạn có thể xem</Text>
                    <View style={{ flex: 1 }}>
                        {noTopMovies.map((item) => (
                            <View key={item.id} style={{ flexDirection: 'row', padding: 20, borderBottomWidth: 1, borderBottomColor: '#cccccc', marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ width: 140 }} onPress={() => handleMoviePress(item)}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={{ uri: item.imageUri }} style={{ width: 65, height: 80, title: item.name, borderRadius: 10 }} />
                                            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 16, color: 'white', letterSpacing: 2, fontWeight: 'bold' }}>{item.name}</Text>
                                                <Text style={{ color: 'white', fontSize: 10 }}>127 Phút</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white', fontSize: 10 }}>{item.votes}</Text>
                                                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/148/148839.png' }} style={{ width: 10, height: 10, marginLeft: 6 }}></Image>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ backgroundColor: 'rgba(0, 178, 255, 1)', marginLeft: 70, borderRadius: 10, width: 80, height: 25, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white', marginTop: 70 }}>
                                        <TouchableOpacity onPress={() => handleNavigateToTickets(item.name)}>
                                            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', padding: 1 }}>Đặt vé</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'rgba(68, 89, 109, 1)',
    },
    project: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    headerImage: {
        width: 26,
        height: 26,
    },
    headerText: {
        color: 'rgba(255, 122, 0, 1)',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 4,
        fontStyle: 'italic',
    },
    headerTextPoly: {
        color: 'rgba(255, 230, 0, 0.8)',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    project_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        marginLeft: 10,
    },
    wrapper: {

    },
    slide1: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(68, 89, 109, 1)',
        marginHorizontal: 20,
    },
    slide2: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(68, 89, 109, 1)',
        marginHorizontal: 20,
    },
    slide3: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(68, 89, 109, 1)',
        marginHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default Listmovie;