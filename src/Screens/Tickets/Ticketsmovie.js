import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Ticketsmovie = ({ navigation, route, modalVisible }) => {
  const { showtime, movieName, date, dayOfWeek, cinemaName, locationName, logoUri } = route.params;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const { height } = Dimensions.get('window'); // Lấy chiều cao màn hình

  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;

  // Danh sách các ghế đã được chọn sẵn
  const preselectedSeats = ['A1', 'B2', 'E5', 'F1-2'];

  const toggleSeatSelection = (seat) => {
    if (preselectedSeats.includes(seat)) {
      // Nếu ghế đã được chọn sẵn thì không thực hiện gì
      return;
    }
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const seatPrices = {
    'Thường': 70000,
    'VIP': 80000,
    'COUPLE': 160000,
  };

  const seatInfo = selectedSeats.map(seat => {
    let type = 'Thường';
    if (seat.startsWith('E')) {
      type = 'VIP';
    } else if (seat.startsWith('F')) {
      type = 'COUPLE';
    }
    return {
      seat,
      price: seatPrices[type] || 0,
    };
  });

  const totalAmount = seatInfo.reduce((total, { price }) => total + price, 0);

  const renderSeat = (row, index) => {
    const seatNumber = row === 'F' ? `${row}${index * 2 + 1}-${index * 2 + 2}` : `${row}${index + 1}`;
    const isSelected = selectedSeats.includes(seatNumber);
    const isPreselected = preselectedSeats.includes(seatNumber);
    let seatStyle = styles.seat;

    if (row === 'E') {
      seatStyle = styles.vipSeat;
    } else if (row === 'F') {
      seatStyle = styles.doubleSeat;
    }

    return (
      <TouchableOpacity
        key={seatNumber}
        style={[
          seatStyle,
          isSelected && styles.selectedSeat,
          isPreselected && styles.preselectedSeat
        ]}
        onPress={() => toggleSeatSelection(seatNumber)}
        disabled={isPreselected} // Vô hiệu hóa ghế đã chọn sẵn
      >
        <Text style={styles.seatText}>{row === 'F' ? `${index * 2 + 1}-${index * 2 + 2}` : index + 1}</Text>
      </TouchableOpacity>
    );
  };

  const handleContinue = () => {
    setShowInfo(true);
  };

  const handleClose = () => {
    setShowInfo(false);
  };

  const handleFoods = () => {
    const ticketData = {
      movieName,
      showtime,
      dayOfWeek,
      date,
      cinema: 'Cinema 4',
      seats: seatInfo,
      totalAmount,
      logoUri,
      cinemaName,
      locationName
    };
    navigation.navigate('Ticketsfoods', { ticketData });
  };
  return (
    <View style={styles.project}>
      <View style={styles.project}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
          </TouchableOpacity>
          <Text style={styles.text}>Tickets</Text>
        </View>
        <View>
          <View style={{ backgroundColor: 'rgba(87, 110, 132, 1)', borderRadius: 10, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', width: 317, height: 44, borderRadius: 10 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: logoUri }} style={{ width: 26, height: 26 }}></Image>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: 'white', letterSpacing: 2, fontWeight: 'bold' }}>{movieName}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.tickets_text}>{showtime} -</Text>
                  <Text style={styles.tickets_text}> {dayOfWeek} -</Text>
                  <Text style={styles.tickets_text}> {date} -</Text>
                  <Text style={styles.tickets_text}> Cinema 4</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 26 }}>
          <View style={styles.screen}>
            <View style={styles.screenBorder}>
              <Text style={{ color: 'white', fontSize: 10 }}>Screen movie</Text>
            </View>
          </View>
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <ScrollView style={styles.tickets_project}>
                {rows.map((row) => (
                  <View key={row} style={styles.row}>
                    <Text style={styles.rowLabel}>{row}</Text>
                    {Array.from({ length: seatsPerRow }, (_, i) => {
                      if (row === 'F' && i % 2 === 0) {
                        return renderSeat(row, i);
                      } else if (row !== 'F') {
                        return renderSeat(row, i);
                      } else {
                        return null;
                      }
                    })}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'rgba(87, 110, 132, 1)' }}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#ccc', borderRadius: 2 }}></View>
                <Text style={{ color: 'white', marginLeft: 5 }}>Thường</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginLeft: 10 }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#ff9800', borderRadius: 2 }}></View>
                <Text style={{ color: 'white', marginLeft: 5 }}>VIP</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginLeft: 10 }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#4caf50', borderRadius: 2 }}></View>
                <Text style={{ color: 'white', marginLeft: 5 }}>COUPLE</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#6c63ff', borderRadius: 2 }}></View>
                <Text style={{ color: 'white', marginLeft: 5 }}>Selected</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#9c27b0', borderRadius: 2 }}></View>
                <Text style={{ color: 'white', marginLeft: 5 }}>Selectediu</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Phần thông tin ghế đã đặt */}
        {showInfo && (
          <Modal visible={modalVisible} animationType="slide" transparent>
            <View style={styles.overlay}>
              <View style={styles.infoProject}>
                <View style={styles.infoHeader}>
                  <Text style={styles.infoText}>Thông tin ghế đã đặt</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                    <Icon name="close" size={20} color="white" />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.selectedSeats}>
                  {seatInfo.map(({ seat, price }) => (
                    <View key={seat} style={styles.seatRow}>
                      <Text style={styles.movieText}>Ghế {seat}</Text>
                      <Text style={styles.priceText}>{price.toLocaleString()}đ</Text>
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.totalPayment}>
                  <Text style={styles.totalText}>Tổng thanh toán:</Text>
                  <Text style={styles.amountText}>{totalAmount.toLocaleString()}đ</Text>
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
              <Text style={styles.amountText}>{totalAmount.toLocaleString()}đ</Text>
              <TouchableOpacity onPress={handleContinue}>
                <Icon name="chevron-up" size={20} color="white" />
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
  );
};

export default Ticketsmovie

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
  screen: {
    // width: '80%',
    height: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    position: 'relative',
    // borderRadius: 26,
    borderTopLeftRadius: 600,
    borderTopRightRadius: 600,
    marginHorizontal: 26,
  },
  screenBorder: {
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    borderTopWidth: 4,
    borderTopColor: 'rgba(260, 70, 168, 0.88)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickets_project: {
    // flex: 1,
    // padding: 20,
    // width: 320,
    // height: 370,
    marginTop: 26,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rowLabel: {
    marginRight: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  seat: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  selectedSeat: {
    backgroundColor: '#6c63ff',
  },
  seatText: {
    color: '#fff',
  },
  selectedSeatsProject: {
    marginTop: 10,
  },
  selectedSeatsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  vipSeat: {
    width: 30,
    height: 30,
    backgroundColor: '#ff9800', // Màu cho ghế VIP
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  doubleSeat: {
    width: 65, // Rộng hơn để bao 2 ghế
    height: 30,
    backgroundColor: '#4caf50', // Màu cho ghế đôi
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  movieText: {
    color: 'white',
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
    padding: 10,
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
  }
})