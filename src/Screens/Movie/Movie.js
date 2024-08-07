import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import Swiper from 'react-native-swiper';

const Movie = ({ route, navigation }) => {
    const { item } = route.params;
    const [selected, setSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const actorsData = [
        { id: '1', name: 'Tom Hanks', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
        { id: '2', name: 'Meryl Streep', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
        { id: '3', name: 'Leonardo DiCaprio', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
        { id: '4', name: 'Tom Hanks', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
        { id: '5', name: 'Meryl Streep', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
        { id: '6', name: 'Leonardo DiCaprio', imageUri: 'https://static.turbosquid.com/Preview/2015/07/01__07_00_44/d00.jpg51979e6b-755c-4f03-9a16-d8114f0e2058Zoom.jpg' },
    ];

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


    const handleMoviePress = () => {
        navigation.navigate('Moviereview', { item });
    };

    const handleMovieSelection = (item) => {
        // Điều hướng qua màn hình chi tiết của bộ phim được chọn
        navigation.navigate('Movie', { item });
        navigation.replace('Movie', { item });
    };
    const handleNavigateToTickets = (movieName) => {
    navigation.navigate('Tickets', { movieName });
  };
    return (
        <View style={styles.project}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Movie</Text>
            </View>
            <ScrollView>
                <View style={{ borderBottomWidth: 4, borderColor: 'white', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 110, height: 160, marginRight: 20, marginBottom: 20 }}>
                            <Image source={{ uri: item.imageUri }} style={{ width: 110, height: 160, resizeMode: 'center' }}></Image>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 2, marginTop: 10, fontSize: 20 }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <Text style={{ color: 'white', fontSize: 10 }}>Thể loại: </Text>
                                <Text style={{ color: 'rgba(255, 230, 0, 0.8)', fontSize: 10 }}>Hoạt hình</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ backgroundColor: 'rgba(0, 110, 220, 1)', padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginTop: 25, marginRight: 20, marginLeft: 10 }}>
                                    <TouchableOpacity onPress={handleMoviePress}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="play" size={20} color={'white'} style={{ padding: 5 }} />
                                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 5, padding: 5 }}>Xem review</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25, marginLeft: 10 }}>
                                    <TouchableOpacity onPress={() => setSelected(!selected)}>
                                        <Icon name="heart-circle-plus" size={20} color={selected ? 'red' : 'white'} style={{}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, width: 320, height: 60, marginHorizontal: 20, borderColor: 'rgba(87, 110, 136, 1)', borderRadius: 10, marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="film" size={15} color={'white'} />
                                    <Text style={{ color: 'white', marginLeft: 4, fontSize: 10, fontWeight: 'bold' }}>80 giờ 80 phút</Text>
                                </View>
                                <Text style={{ color: 'rgba(206, 206, 206, 1)', fontSize: 10, marginTop: 10 }}>Thời lượng phim</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="star" size={15} color={'rgba(255, 230, 0, 0.8)'} />
                                    <Text style={{ color: 'white', fontSize: 10, marginLeft: 4, fontWeight: 'bold' }}>{item.votes}</Text>
                                </View>
                                <Text style={{ color: 'rgba(206, 206, 206, 1)', fontSize: 10, marginTop: 10 }}>Đánh giá</Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="ticket-simple" size={15} color={'white'} />
                                    <Text style={{ color: 'white', fontSize: 10, marginLeft: 4, fontWeight: 'bold' }}>80000+</Text>
                                </View>
                                <Text style={{ color: 'rgba(206, 206, 206, 1)', fontSize: 10, marginTop: 10 }}>Vé đã bán</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ margin: 10, borderBottomWidth: 4, borderColor: 'white' }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Thông tin bộ phim</Text>
                    <Text style={{ color: 'white', marginTop: 10 }}>
                        {isExpanded ? (
                            <>
                                Gru phải đối mặt với kẻ thù mới là Maxime Le Mal và Valentina đang lên kế hoạch trả thù anh, buộc gia đình anh phải lẩn trốn đi nơi khác. Bên cạnh việc đấu tranh bảo vệ gia đình, Gru đồng thời còn phải tìm ra điểm chung với thành viên mới nhất trong nhà đó là Gru Jr.
                                <TouchableOpacity onPress={toggleExpansion}>
                                    <Text style={{ color: 'rgba(32, 15, 100, 1)', fontWeight: 'bold' }}>Rút gọn</Text>
                                </TouchableOpacity>
                            </>
                        ) : (
                            <>
                                Gru phải đối mặt với kẻ thù mới là Maxime Le Mal và Valentina đang lên kế hoạch trả thù anh, buộc gia đình anh phải lẩn trốn đi nơi khác.
                                <TouchableOpacity onPress={toggleExpansion}>
                                    <Text style={{ color: 'rgba(32, 15, 100, 1)', fontWeight: 'bold' }}>Xem thêm</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'white' }}>Đạo diễn: </Text>
                        <Text style={{ color: 'rgba(255, 230, 0, 0.8)' }}>Messi, Ronaldo</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                        <Text style={{ color: 'white' }}>Thể loại: </Text>
                        <Text style={{ color: 'rgba(255, 230, 0, 0.8)' }}>Hoạt hình</Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 4, borderColor: 'white', marginHorizontal: 10 }}>
                    <Text style={{ color: 'white', marginLeft: 10 }}>Diễn viên</Text>
                    <ScrollView horizontal style={styles.project_poly} showsHorizontalScrollIndicator={false}>
                        {actorsData.map(actor => (
                            <View key={actor.id} style={styles.actorItem}>
                                <Image source={{ uri: actor.imageUri }} style={styles.actorImage} />
                                <Text style={{ color: 'white', textTransform: 'capitalize' }}>{actor.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={{ borderBottomWidth: 4, borderColor: 'white', margin: 10 }}>
                    <View style={{ width: '100%', height: 140, borderRadius: 20, overflow: 'hidden' }}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            dotColor='#FFFFFF'
                            activeDotColor='#FFD700'
                            autoplay={true}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    source={{ uri: 'https://cdn.galaxycine.vn/media/2024/6/26/voucher-shopeepay-giam-10k-danh-tang-cac-stars-2_1719370297038.jpg' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    source={{ uri: 'https://cdn.galaxycine.vn/media/2024/7/26/2048_1721986442494.jpg' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                            <View style={styles.slide3}>
                                <Image
                                    source={{ uri: 'https://cdn.galaxycine.vn/media/2024/6/27/xummer2024-duatop-digital-2048x682_1719459622629.jpg' }}
                                    style={{ width: '100%', height: '100%', resizeMode: 'center', borderRadius: 20 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 4, borderColor: 'white', margin: 10 }}>
                    <Text style={{ color: 'white', marginLeft: 10 }}>Phim cùng thể loại</Text>
                    <ScrollView horizontal style={styles.project_poly} showsHorizontalScrollIndicator={false}>
                        {moviesData.map(item => (
                            <TouchableOpacity onPress={() => handleMovieSelection(item)}>
                                <View key={item.id} style={styles.actorItem}>
                                <Image source={{ uri: item.imageUri }} style={styles.actorImage} />
                                <Text style={{ color: 'white', textTransform: 'capitalize' }}>{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'rgba(68, 89, 109, 0.6)', justifyContent: 'center', alignItems: 'center', width: 360, height: 40 }}>
                <TouchableOpacity onPress={() => handleNavigateToTickets(item.name)}>
                    <View style={{ backgroundColor: 'red', width: 260, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Đặt vé</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Movie

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
    project_poly: {
        flexDirection: 'row',
        padding: 10,
    },
    actorItem: {
        padding: 10,
    },
    actorImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
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
})