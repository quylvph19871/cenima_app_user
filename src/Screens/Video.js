import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng icon của thư viện react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome6';

const HeartButton = () => {
    const [selected, setSelected] = useState(false);

    return (
        <View style={{ backgroundColor: 'black', flex: 1}}>
            <TouchableOpacity onPress={() => setSelected(!selected)}>
                {/* <Icon name="heart" size={30} color={selected ? 'pink' : 'white'} /> */}
                <Icon name="heart-circle-plus" size={70} color={selected ? 'red' : 'white'} style={{}}/>
            </TouchableOpacity>
        </View>
    );
}

export default HeartButton;