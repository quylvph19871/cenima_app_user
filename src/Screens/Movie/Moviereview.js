import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const YoutubePlayer = ({ route, navigation }) => {
    const { item } = route.params;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

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


    const handleNavigateToTickets = (movieName) => {
        navigation.navigate('Tickets', { movieName });
      };
    return (
        <View style={styles.Project}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Movie</Text>
            </View>
            <ScrollView>
                <View style={{ width: 350, height: 200 }}>
                    <YoutubeIframe
                        play={true} // Tự động phát video
                        videoId="HENVx4Xg2P4" // ID của video YouTube bạn muốn phát
                        width={380}
                        height={350}
                        style={styles.youtubePlayer}
                    />
                </View>
                <View style={{ margin: 10}}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginTop: 10}}>{item.name}</Text>
                    <Text style={{ color: 'white', marginTop: 10}}>
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
                </View>
                <View style={{ borderWidth: 2, borderColor: 'white', marginTop: 20, marginHorizontal: 20 }}></View>
                <View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: 'white', marginLeft: 10 }}>Phim cùng thể loại</Text>
                        <ScrollView horizontal style={styles.project_poly} showsHorizontalScrollIndicator={false}>
                            {moviesData.map(actor => (
                                <View key={actor.id} style={styles.actorItem}>
                                    <Image source={{ uri: actor.imageUri }} style={styles.actorImage} />
                                    <Text style={{ color: 'white', textTransform: 'capitalize' }}>{actor.name}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={{ backgroundColor: 'rgba(68, 89, 109, 0.6)', justifyContent: 'center', alignItems: 'center', width: 360, height: 40, zIndex: 1 }}>
                <TouchableOpacity onPress={() => handleNavigateToTickets(item.name)}>
                    <View style={{ backgroundColor: 'red', width: 260, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Đặt vé</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Project: {
        flex: 1,
        backgroundColor: 'rgba(68, 89, 109, 1)',
    },
    youtubePlayer: {
        alignSelf: 'stretch',
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
});

export default YoutubePlayer;