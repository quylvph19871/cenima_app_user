import { StyleSheet, Text, View, TouchableWithoutFeedback, FlatList, Image, Animated } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const Trendingmovie = ({ data }) => {
    return (
        <View style={styles.project}>
            <Text style={styles.project_text}>Phim Trending</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Moviecard item={item} />}
                keyExtractor={(item, index) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'center',
                    position: 'relative',
                    paddingBottom: 70,
                    zIndex: 1
                }}
            />
        </View>
    );
}

const Moviecard = ({ item }) => {
    return (
        // <Animatable.View animation="fadeIn" duration={1000} style={{ alignItems: 'center', marginHorizontal: 0, height: 250 }}>
        //     <TouchableWithoutFeedback>
        //         <Animated.View style={{marginHorizontal: 0, height: 250, elevation: 20}}>
        //             <Image source={{ uri: item.imageUri }} style={styles.image} />
        //             <Text style={{ color: 'white' }}>{item.name}</Text>
        //         </Animated.View>
        //     </TouchableWithoutFeedback>
        // </Animatable.View>
        <Animated.View style={{ position: 'relative', paddingHorizontal: 25 }}>
            <Animated.View style={{ marginHorizontal: 0, height: 200, elevation: 20, borderRadius: 40, backgroundColor: 'red'}}>
                <Image source={{ uri: item.imageUri }} style={styles.image} />
                <Text style={{ color: 'white' }}>{item.name}</Text>
            </Animated.View>
        </Animated.View>
    );
}

export default Trendingmovie;

const styles = StyleSheet.create({
    project: {
        marginBottom: 8,
    },
    project_text: {
        color: 'white',
        fontSize: 10,
        marginLeft: 4,
        marginBottom: 5,
    },
    image: {
        width: 160,
        height: 200,
        borderRadius: 20,
    },
});