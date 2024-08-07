import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Ticketsmonneys = ({ navigation, route }) => {
    const { ticketData, comboCount, comboData, formattedDayOfWeek, formattedDate } = route.params;
    const [isSelected, setIsSelected] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [selectedMethod, setSelectedMethod] = useState(null);


    const handlePhoneNumberChange = (text) => {
        if (text.length <= 10) {
            setPhoneNumber(text);
            setError('');
        }
    };

    const validatePhoneNumber = () => {
        if (phoneNumber === '') {
            setError('Vui lòng nhập số điện thoại');
        } else if (phoneNumber.length !== 10) {
            setError('Vui lòng nhập đúng số điện thoại (10 ký tự)');
        } else {
            setError('')
        }
    };

    return (
        <View style={styles.project}>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
                </TouchableOpacity>
                <Text style={styles.text}>Tickets</Text>
            </View>
            <Text style={{ color: 'white', marginLeft: 10 }}>Thông tin đặt vé</Text>
            {isSelected && (
                <View style={styles.movieSummary}>
                    <View style={{ flexDirection: 'row', width: 260, height: 44, borderRadius: 10, marginRight: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: ticketData.logoUri }} style={{ width: 26, height: 26 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            {!isSelected && (
                                <Text style={styles.movieText}>{ticketData.movieName}</Text>
                            )}
                            {isSelected && (
                                <Text style={{ color: 'white', marginTop: 10 }}>{ticketData.movieName}</Text>
                            )}
                            {!isSelected && (
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.tickets_text}>{ticketData.showtime} -</Text>
                                    <Text style={styles.tickets_text}> {ticketData.date} -</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={{ marginLeft: 26 }}>
                        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                            <Icon name={isSelected ? "chevron-up" : "chevron-down"} size={20} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {!isSelected && (
                <View style={{ backgroundColor: 'rgba(87, 110, 132, 1)', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', width: 260, height: 44, borderRadius: 10, marginRight: 10 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: ticketData.logoUri }} style={{ width: 26, height: 26 }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            {!isSelected && (
                                <Text style={styles.movieText}>{ticketData.movieName}</Text>
                            )}
                            {isSelected && (
                                <Text style={{ color: 'white', marginTop: 10 }}>{ticketData.movieName}</Text>
                            )}
                            {!isSelected && (
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>{ticketData.showtime} -</Text>
                                    <Text style={{ color: 'rgba(255, 122, 0, 1)' }}> {ticketData.date}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={{ marginLeft: 26 }}>
                        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
                            <Icon name={isSelected ? "chevron-up" : "chevron-down"} size={20} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {isSelected && (
                <View style={styles.movieDetails}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ marginRight: 70 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Ngày giờ</Text>
                            <Text style={{ color: 'white' }}>{ticketData.showtime}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'rgba(255, 122, 0, 1)', textTransform: 'capitalize' }}>{formattedDayOfWeek}, </Text>
                                <Text style={{ color: 'rgba(255, 122, 0, 1)' }}>{ticketData.date}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Ghế</Text>
                            {ticketData.seats.map(({ seat, price }) => (
                                <View key={seat} style={styles.seatRow}>
                                    <Text style={{ color: 'white' }}>Ghế {seat}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginHorizontal: 20, borderStyle: 'dashed', borderColor: 'white' }} />
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ marginRight: 40 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Cinema</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>{ticketData.cinemaName} </Text>
                                <Text style={{ color: 'white' }}>{ticketData.locationName}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Cinema</Text>
                            <Text style={{ color: 'white' }}>{ticketData.cinema}</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginHorizontal: 20, borderStyle: 'dashed', borderColor: 'white' }} />
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ marginRight: 40 }}>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Screen</Text>
                            <Text style={{ color: 'white' }}>20K Phụ đề Vietnam</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.4)' }}>Foods movie</Text>
                            <Text style={{ color: 'white' }}>{comboCount}</Text>
                        </View>
                    </View>
                </View>
            )}
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: 'white', marginLeft: 10 }}>Thông tin mua tickets</Text>
                <Text style={{ color: '#f4a460', marginLeft: 10, fontSize: 10 }}>FPT Cinema sẽ gửi thông tin mua tickets qua SĐT này</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(83, 110, 132, 1)', marginTop: 10, width: 260, height: 40, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderLeftWidth: 1, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'white' }}>
                        <TextInput
                            style={{ color: 'white' }}
                            keyboardType='numeric'
                            value={phoneNumber}
                            onChangeText={handlePhoneNumberChange}
                            onBlur={validatePhoneNumber}
                            maxLength={10}
                        ></TextInput>
                    </View>
                    <View style={{ backgroundColor: 'rgba(83, 110, 132, 1)', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10, marginTop: 10, borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: 'white' }}>
                        <TouchableOpacity onPress={validatePhoneNumber}>
                            <Icon name="pencil" size={20} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </View>
                {error ? <Text style={{ color: 'red', marginLeft: 26 }}>{error}</Text> : null}
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ color: 'white', marginLeft: 10 }}>Chọn phương thức thanh toán</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => setSelectedMethod('ZaloPay')} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: selectedMethod === 'ZaloPay' ? 'rgba(0, 110, 220, 1)' : 'rgba(0, 110, 220, 1)',
                            marginHorizontal: 10,
                            flexDirection: 'row',
                            borderRadius: 4,
                            borderWidth: selectedMethod === 'ZaloPay' ? 2 : 0,
                            width: 320,
                            height: 40,
                            borderColor: 'white',
                            // justifyContent: 'center', // Để căn giữa nội dung
                            // alignItems: 'center' // Để căn giữa nội dung
                        }}>
                            <Image source={{ uri: 'https://fintechnews.sg/wp-content/uploads/2019/06/05-zalopay.png' }} style={{ width: 40, height: 40, marginLeft: 10 }} />
                            <Text style={{
                                color: selectedMethod === 'ZaloPay' ? 'white' : 'white',
                                marginLeft: 10,
                                padding: 5,
                                borderRadius: 4
                            }}>
                                Ví ZaloPay
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {selectedMethod === 'ZaloPay' && <Icon name="check-circle" size={20} color={'white'} style={{ right: 60 }} />}
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Ticketsmonneys

const styles = StyleSheet.create({
    project: {
        flex: 1,
        backgroundColor: 'rgba(68, 89, 109, 1)',
    },
    movieSummary: {
        backgroundColor: 'rgba(87, 110, 132, 1)',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    movieDetails: {
        backgroundColor: 'rgba(87, 110, 132, 1)',
        marginHorizontal: 10,
        // padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
    },
    movieText: {
        color: 'white',
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    tickets_text: {
        color: 'white',
        margin: 5,
    },
    seatRow: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        // top: 5,
        // left: 10,
        // backgroundColor: 'rgba(248, 94, 94, 1)',
        height: 40,
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