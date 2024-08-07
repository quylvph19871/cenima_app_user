import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Foundation';
import Iconn from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const Ticketsfoods = ({ navigation, route, modalVisible }) => {
  const { ticketData } = route.params;
  const [showInfo, setShowInfo] = useState(false);
  const [ticketDataMoive, setTicketDataMovie] = useState({
    seats: [],
    totalAmount: 0
  });
  const [comboCounts, setComboCounts] = useState({});
  const [comboData, setComboData] = useState({
    combos: [],
    totalComboAmount: 0
  });

  const foodCombos = [
    {
      name: "Combo 1",
      description: "1 Popcorn, 1 Soda",
      imageUri: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2024/082024/2024_Olympic_199_350x495.jpg",
      price: 50000
    },
    {
      name: "Combo 2",
      description: "2 Popcorn, 2 Soda",
      imageUri: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2024/082024/2024_Olympic_149_350x495.jpg",
      price: 90000
    },
    {
      name: "Combo 3",
      description: "1 Popcorn, 1 Soda, 1 Hotdog",
      imageUri: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2024/012024/240x201_2.jpg",
      price: 75000
    },
    {
      name: "Combo 4",
      description: "2 Popcorn, 2 Soda, 1 Nachos",
      imageUri: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2024/082024/z5701320082202_20fbb5c8a2f2747f89d1c95f6b541f57.jpg",
      price: 120000
    },
    {
      name: "Combo 5",
      description: "1 Large Popcorn, 2 Large Soda",
      imageUri: "https://iguov8nhvyobj.vcdn.cloud/media/wysiwyg/2024/012024/240x201_2.jpg",
      price: 100000
    }
  ];

  const handleContinue = () => {
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  const handleIncreaseSeat = () => {
    setCount(count + 1);
  };

  const handleDecreaseSeat = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncreaseCombo = (comboIndex) => {
    const selectedCombo = foodCombos[comboIndex];
    setComboCounts(prevCounts => ({
      ...prevCounts,
      [comboIndex]: (prevCounts[comboIndex] || 0) + 1
    }));
    setComboData(prevState => ({
      combos: [...prevState.combos, selectedCombo],
      totalComboAmount: prevState.totalComboAmount + selectedCombo.price
    }));
  };

  const handleDecreaseCombo = (comboIndex) => {
    if (comboCounts[comboIndex] > 0) {
      const selectedCombo = foodCombos[comboIndex];
      setComboCounts(prevCounts => ({
        ...prevCounts,
        [comboIndex]: prevCounts[comboIndex] - 1
      }));
      const indexToRemove = comboData.combos.findIndex(combo => combo.name === selectedCombo.name);
      if (indexToRemove !== -1) {
        comboData.combos.splice(indexToRemove, 1);
        setComboData(prevState => ({
          combos: prevState.combos,
          totalComboAmount: prevState.totalComboAmount - selectedCombo.price
        }));
      }
    }
  };

  const handleFoods = () => {
    const comboCount = comboData.combos.length;
    // Chuyển đổi định dạng ngày
    const formattedDayOfWeek = moment(ticketData.dayOfWeek, 'YYYY-MM-DD').format('dddd'); // Định dạng lại ngày

    // Điều hướng và truyền dữ liệu
    navigation.navigate('Ticketsmonneys', { ticketData, comboCount, comboData, formattedDayOfWeek});
  };
  return (
    <View style={styles.project}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Tickets</Text>
      </View>
      <View>
        <ScrollView>
          <View style={{ backgroundColor: 'rgba(87, 110, 132, 1)', borderRadius: 10, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: 317, height: 44, borderRadius: 10 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: ticketData.logoUri }} style={{ width: 26, height: 26 }}></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: 'white', letterSpacing: 2, fontWeight: 'bold' }}>{ticketData.movieName}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.tickets_text}>{ticketData.showtime} -</Text>
                  <Text style={styles.tickets_text}> {ticketData.dayOfWeek} -</Text>
                  <Text style={styles.tickets_text}> {ticketData.date} -</Text>
                  <Text style={styles.tickets_text}> {ticketData.cinema}</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', margin: 10 }}>Chọn mua foods</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 25, height: 400 }}>
              <ScrollView style={styles.foodComboList}>
                {foodCombos.map((combo, index) => (
                  <View key={index} style={styles.comboItem}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Image source={{ uri: combo.imageUri }} style={styles.comboImage} />
                    </View>
                    <View style={styles.comboDetails}>
                      <Text style={styles.comboName}>{combo.name}</Text>
                      <Text style={styles.comboDescription}>{combo.description}</Text>
                      <Text style={styles.comboPrice}>{combo.price.toLocaleString()}đ</Text>
                    </View>
                    <View style={styles.buttonProject}>
                      <TouchableOpacity style={styles.button} onPress={() => handleDecreaseCombo(index)}>
                        <Icon name="minus" size={10} color={'white'} />
                      </TouchableOpacity>
                      <Text style={{ marginTop: 65, color: 'white' }}>{comboCounts[index] || 0}</Text>
                      <TouchableOpacity style={styles.button} onPress={() => handleIncreaseCombo(index)}>
                        <Icon name="plus" size={10} color={'white'} />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Phần thông tin ghế đã đặt */}
        {showInfo && (
          <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.overlay}>
              <View style={styles.infoProject}>
                <View style={styles.infoHeader}>
                  <Text style={styles.infoText}>Thông tin ghế và combo đã đặt</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Iconn name="close" size={20} color="white" />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.selectedSeats}>
                  {ticketData.seats.map(({ seat, price }) => (
                    <View key={seat} style={styles.seatRow}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1614/1614997.png' }} style={{ width: 20, height: 20 }}></Image>
                        <Text style={styles.movieText}>Ghế {seat}</Text>
                      </View>
                      <View>
                        <Text style={styles.priceText}>{price.toLocaleString()}đ</Text>
                      </View>
                    </View>
                  ))}
                  {comboData.combos.map((combo, index) => (
                    <View key={index} style={styles.seatRow}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2798/2798007.png' }} style={{ width: 20, height: 20 }}></Image>
                        <Text style={styles.movieText}>{combo.name}</Text>
                      </View>
                      <View>
                        <Text style={styles.priceText}>{combo.price.toLocaleString()}đ</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.totalPayment}>
                  <Text style={styles.totalText}>Tổng thanh toán:</Text>
                  <Text style={styles.amountText}>
                    {(ticketData.totalAmount + comboData.totalComboAmount).toLocaleString()}đ
                  </Text>
                </View>
                <TouchableOpacity onPress={handleClose}>
                  <View style={styles.button_tickets}>
                    <Text style={styles.text_tickets}>Đã hiểu</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}

        {/* Phần tổng thanh toán và nút tiếp tục */}
        <View style={styles.bottomProject}>
          <View style={styles.totalAmount}>
            <Text style={styles.totalText}>Tổng tiền:</Text>
            <View style={styles.amountProject}>
              <Text style={styles.amountText}>{(ticketData.totalAmount + comboData.totalComboAmount).toLocaleString()}đ</Text>
              <TouchableOpacity onPress={handleContinue}>
                <Iconn name="chevron-up" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleFoods}>
            <View style={styles.continueButton}>
              <Text style={styles.buttonText}>Tiếp tục</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default Ticketsfoods

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
  tickets_text: {
    color: 'white',
    fontSize: 14,
  },
  foodComboList: {
    marginTop: 10,
    // flex: 1,
  },
  comboItem: {
    flexDirection: 'row',
    marginBottom: 10,
    // paddingBottom: 10,
    backgroundColor: 'rgba(87, 110, 132, 1)',
    marginHorizontal: 10,
    width: 320,
    height: 140,
    borderRadius: 10,
  },
  comboImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 10,
  },
  comboDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  comboName: {
    color: 'white',
  },
  comboDescription: {
    fontSize: 16,
    color: 'rgba(255, 230, 0, 0.8)',
    marginVertical: 5,
  },
  comboPrice: {
    fontSize: 16,
    color: 'white',
  },
  buttonProject: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    flexDirection: 'row',
  },
  button: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 110,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Màu nền với độ mờ
    // justifyContent: 'center',
    // alignItems: 'center',
    zIndex: 1, // Đảm bảo overlay nằm trên cùng
    padding: 20,
    // width: '100%',
    // height: '100%',
  },
  infoProject: {
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(68, 89, 109, 1)', // Màu nền cho thông tin đặt ghế
    borderRadius: 10,
    padding: 20,
    marginTop: 200,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    padding: 5,
  },
  selectedSeats: {
    marginVertical: 10,
    width: '100%',
    height: 400,
  },
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 4,

  },
  movieText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 2,
  },
  priceText: {
    color: 'white',
    fontSize: 14,
  },
  totalPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    color: 'white',
    fontSize: 14,
  },
  amountText: {
    color: 'white',
    fontSize: 14,
  },
  bottomProject: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  totalAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  amountProject: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: 'rgba(0, 64, 266, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    color: 'white',
  },
  preselectedSeat: {
    backgroundColor: '#9c27b0',
  },
  button_tickets: {
    backgroundColor: 'rgba(0, 64, 266, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  text_tickets: {
    color: 'white',
    fontWeight: 'bold',
  },
})