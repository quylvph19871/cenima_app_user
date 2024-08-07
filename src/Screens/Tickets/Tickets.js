import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import moment from 'moment';
import 'moment/locale/vi'
import Icon from 'react-native-vector-icons/Fontisto';

const Tickets = ({ navigation, route }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextNameDays, setNextTenDays] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showtimesVisible, setShowtimesVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [filteredTime, setFilteredTimeSlots] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const { movieName } = route.params; // Access the passed parameter


  const movieTimeSlots = [
    { startTime: '09:00', endTime: '12:00' },
    { startTime: '12:00', endTime: '15:00' },
    { startTime: '15:00', endTime: '18:00' },
    { startTime: '18:00', endTime: '21:00' },
    { startTime: '21:00', endTime: '24:00' },
  ];

  const movieSelect = [
    {
      id: '1',
      name: 'CGV',
      imageUri: 'https://play-lh.googleusercontent.com/dVQ6d8I7XDOkr72-jcAUHsCfQ_ih9p9HUaca82obM6LlmJOKAA8BuY776Xns40Nifg=w240-h480-rw',
      movieTime: [
        // { startTime: '01:00', endTime: '02:00' },
        { startTime: '09:00', endTime: '12:00' },
        { startTime: '12:00', endTime: '15:00' },
        { startTime: '15:00', endTime: '18:00' },
        { startTime: '18:00', endTime: '21:00' },
        { startTime: '21:00', endTime: '24:00' },
        { startTime: '00:00', endTime: '02:00' },
      ],
      locations: [
        {
          id: '1',
          name: 'CGV Location 1',
          address: '123 ABC Street, City, Country',
          showtimes: [
            { id: 1, startTime: '09:00', endTime: '12:00' },
            { id: 2, startTime: '12:00', endTime: '15:00' },
            { id: 3, startTime: '15:00', endTime: '18:00' },
            { id: 4, startTime: '18:00', endTime: '21:00' },
            { id: 5, startTime: '21:00', endTime: '23:00' },
          ]
        },
        {
          id: '2',
          name: 'CGV Location 2',
          address: '456 XYZ Street, City, Country',
          showtimes: [
            { id: '1', startTime: '09:00', endTime: '12:00' },
            { id: '2', startTime: '12:00', endTime: '15:00' },
            { id: '3', startTime: '15:00', endTime: '18:00' },
            { id: '4', startTime: '18:00', endTime: '21:00' },
            { id: '5', startTime: '21:00', endTime: '24:00' },
            { id: '6', startTime: '16:00', endTime: '17:00' },
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Lotte cinema',
      imageUri: 'https://play-lh.googleusercontent.com/XfF2Hv8BIuX8h60TG_MI7xUbsIfofLSP98TeJK1YMQ-O3UeHp1S-JBOpj7UngiQZvg=w240-h480-rw',
      movieTime: [
        { startTime: '09:00', endTime: '12:00' },
        { startTime: '12:00', endTime: '15:00' },
        { startTime: '15:00', endTime: '18:00' },
        { startTime: '18:00', endTime: '21:00' },
        { startTime: '21:00', endTime: '24:00' },
      ],
      locations: [
        {
          id: '3',
          name: 'Lotte Location 1',
          address: '789 DEF Street, City, Country',
          showtimes: [
            { id: '7', time: '11:00 AM' },
            { id: '8', time: '2:00 PM' },
            { id: '9', time: '5:00 PM' }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Beta cinema',
      imageUri: 'https://play-lh.googleusercontent.com/v55fqTyOJ1O0OxO6XnN5-NauNxBk-ov19gMgEI0cEDzgb-Zm1RaQY1Q3Ibrphn3VWA=w240-h480-rw',
      movieTime: [
        { startTime: '09:00', endTime: '12:00' },
        { startTime: '12:00', endTime: '15:00' },
        { startTime: '15:00', endTime: '18:00' },
        { startTime: '18:00', endTime: '21:00' },
        { startTime: '21:00', endTime: '24:00' },
      ],
      locations: [
        {
          id: '4',
          name: 'Beta Location 1',
          address: '456 GHI Street, City, Country',
          showtimes: [
            { id: '10', time: '9:00 AM' },
            { id: '11', time: '12:00 PM' },
            { id: '12', time: '3:00 PM' }
          ]
        }
      ]
    },
    {
      id: '4',
      name: 'Galaxy cinema',
      imageUri: 'https://play-lh.googleusercontent.com/8_L64cTFWwWE2UTc5KyDo-WRFmLNE8wfzSHiV37LEFLKFjX-xQQWvfCFrKdnjuzGKjU=w240-h480-rw',
      movieTime: [
        { startTime: '09:00', endTime: '12:00' },
        { startTime: '12:00', endTime: '15:00' },
        { startTime: '15:00', endTime: '18:00' },
        { startTime: '18:00', endTime: '21:00' },
        { startTime: '21:00', endTime: '23:00' },
      ],
      locations: [
        {
          id: '5',
          name: 'Galaxy Location 1',
          address: '789 JKL Street, City, Country',
          showtimes: [
            { id: '13', time: '10:30 AM' },
            { id: '14', time: '1:30 PM' },
            { id: '15', time: '4:30 PM' }
          ]
        }
      ]
    },
    {
      id: '5',
      name: 'BHD Star Cineplex',
      imageUri: 'https://play-lh.googleusercontent.com/Y-XSHhJp07-Rh7GS26-JzV0UQERVARl6vJuWkTKT1kdq16FJZypJNyCqdNmmQ-qu5nM_=w240-h480-rw',
      movieTime: [
        { startTime: '09:00', endTime: '12:00' },
        { startTime: '12:00', endTime: '15:00' },
        { startTime: '15:00', endTime: '18:00' },
        { startTime: '18:00', endTime: '21:00' },
        { startTime: '21:00', endTime: '24:00' },
      ],
      locations: [
        {
          id: '6',
          name: 'BHD Location 1',
          address: '101 MNO Street, City, Country',
          showtimes: [
            { id: '16', time: '11:30AM' },
            { id: '17', time: '2:30 PM' },
            { id: '18', time: '5:30 PM' }
          ]
        }
      ]
    }
  ];
  const nextTenDays = [];
  for (let i = 0; i <= 10; i++) {
    const date = moment().add(i, 'days');
    nextTenDays.push({
      id: i,
      dayOfWeek: date.format('dd'),
      date: date.format('DD'),
    });
  }

  const handleSelectDay = (day) => {
    setSelectedDay(day.id);
  };

  const handleSelectSlot = (index) => {
    if (index === filteredTimeSlots.length) {
      // Chọn "Tất cả"
      setSelectedSlot(index);
      setSelectedTimeRange(null); // Không chọn khoảng thời gian cụ thể
    } else {
      // Chọn khoảng thời gian cụ thể
      setSelectedSlot(index);
      const selectedSlot = filteredTimeSlots[index];
      setSelectedTimeRange(selectedSlot); // Cập nhật khoảng thời gian đã chọn
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentTime.getDate()) {
        setCurrentTime(now);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, [currentTime]);

  useEffect(() => {
    const currentDate = moment(currentTime);

    const updatedNextTenDays = nextTenDays.filter((day) => {
      const dayDate = moment().add(day.id, 'days');
      return dayDate.isSameOrAfter(currentDate, 'day');
    });

    setNextTenDays(updatedNextTenDays);
  }, [currentTime]);

  const currentHour = moment(currentTime).format('HH:mm');
  const currentDate = moment();
  const filteredTimeSlots = movieTimeSlots.filter((slot) => {
    const slotStart = moment(slot.startTime, 'HH:mm');
    const slotEnd = moment(slot.endTime, 'HH:mm');
    const slotDate = moment().add(selectedDay, 'days').format('DD');

    return (
      (currentDate.format('DD') === slotDate && slotEnd.isAfter(currentDate)) ||
      (currentDate.format('DD') !== slotDate)
    );
  });
  const handleLocationClick = (locationId) => {
    setSelectedLocation(locationId === selectedLocation ? null : locationId);
  };

  const handleTimeClick = (showtime, movieName, date, dayOfWeek, cinemaName, locationName, logoUri) => {
    navigation.navigate('Ticketsmovie', {
      showtime,
      movieName,
      date,
      dayOfWeek,
      cinemaName,
      locationName,
      logoUri,
    });
  };
  const handleSelectLocation = (locationId) => {
    setSelectedLocation(locationId);
    setSelectedTime(null); // Reset selected time when location changes
  };
  const handleSelectTime = (timeId) => {
    setSelectedTime(timeId);
  };
  const filterTimeSlots = () => {
    const currentHour = new Date().getHours();
    return movieTimeSlots.filter(slot => parseInt(slot.startTime.split(':')[0]) >= currentHour);
  };
  const day = nextTenDays.find(d => d.id === selectedDay);

  const currentDayInfo = {
    date: moment().format('DD/MM'),
    dayOfWeek: moment().format('dd'),
  };
  const handleCinemaSelection = (cinemaId) => {
    setSelectedCinema(cinemaId);
  };
  return (
    <View style={styles.project}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../img/arrow-small-left.png')} style={styles.img_menu} />
        </TouchableOpacity>
        <Text style={styles.text}>Tickets</Text>
      </View>
      <ScrollView>
        <View>
          <View style={{ backgroundColor: 'rgba(87, 110, 132, 1)' }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {nextTenDays.map((day) => (
                <TouchableOpacity key={day.id} onPress={() => handleSelectDay(day)}>
                  <View style={[styles.project_text, selectedDay === day.id ? { backgroundColor: 'rgba(0, 64, 266, 0.6)', borderRadius: 10 } : null]}>
                    <Text style={styles.project_fpoly}>{day.dayOfWeek}</Text>
                    <Text style={styles.project_movie}>{day.date}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => handleSelectSlot(filteredTimeSlots.length)}
              style={selectedSlot === filteredTimeSlots.length ? [styles.slotButton, styles.selectedButton] : styles.slotButton}
            >
              <Text style={{ color: 'white' }}>Tất cả</Text>
            </TouchableOpacity>
            {filteredTimeSlots.map((slot, index) => (
              <TouchableOpacity key={index} style={selectedSlot === index ? [styles.slotButton, styles.selectedButton] : styles.slotButton} onPress={() => handleSelectSlot(index)}>

                <Text style={{ color: 'white' }}>{slot.startTime} - {slot.endTime}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal={true}>
            {movieSelect.map(cinema => (
              <View key={cinema.id}>
                <View style={[styles.cinemaItem, selectedCinema === cinema.id && styles.selectedItem]}>
                  <TouchableOpacity onPress={() => handleCinemaSelection(cinema.id)}>
                    <Image source={{ uri: cinema.imageUri }} style={styles.logo} />
                    {selectedCinema === cinema.id && <Icon name="check" size={7} color={'white'} style={{ left: 44, position: 'absolute', bottom: 26, backgroundColor: 'rgba(0, 131, 266, 0.6)', padding: 4, borderRadius: 170 }} />}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <View>
            {movieSelect.map(item => (
              <View key={item.id}>
                {selectedCinema === item.id && (
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Text>
                    {item.locations.map(location => (
                      <View key={location.id} style={{ flexDirection: 'row' }}>
                        <View style={{ width: 320 }}>
                          <View style={{ flexDirection: 'row' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Image source={{ uri: item.imageUri }} style={{ width: 26, height: 26 }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                              <Text style={{ color: 'white', marginTop: 10 }}>{location.name}</Text>
                              <Text style={{ color: 'rgba(131, 131, 131, 0.6)' }}>{location.address}</Text>
                            </View>
                          </View>
                          {selectedLocation === location.id && (
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                              {selectedTimeRange
                                ? location.showtimes
                                  .filter(showtime => (
                                    showtime.startTime >= selectedTimeRange.startTime &&
                                    showtime.endTime <= selectedTimeRange.endTime
                                  ))
                                  .map((showtime) => (
                                    <TouchableOpacity
                                      key={showtime.id}
                                      onPress={() => handleTimeClick(
                                        `${showtime.startTime} - ${showtime.endTime}`,
                                        movieName,
                                        selectedDay === 0 ? currentDayInfo.date : moment().add(selectedDay, 'days').format('DD/MM'),
                                        selectedDay === 0 ? currentDayInfo.dayOfWeek : moment().add(selectedDay, 'days').format('dd'),
                                        item.name, // Cinema name from movieSelect item
                                        location.name,
                                        item.imageUri // Passing the movieSelect item logo
                                      )}
                                      style={styles.timeButton}
                                    >
                                      <Text style={{ color: 'white', padding: 4, fontSize: 10 }}>{showtime.startTime} -</Text>
                                      <Text style={{ color: 'white', padding: 4, fontSize: 10 }}>{showtime.endTime}</Text>
                                    </TouchableOpacity>
                                  ))
                                : location.showtimes.map((showtime) => (
                                  <TouchableOpacity
                                    key={showtime.id}
                                    onPress={() => handleTimeClick(
                                      `${showtime.startTime} - ${showtime.endTime}`,
                                      movieName,
                                      selectedDay === 0 ? currentDayInfo.date : moment().add(selectedDay, 'days').format('DD/MM'),
                                      selectedDay === 0 ? currentDayInfo.dayOfWeek : moment().add(selectedDay, 'days').format('dd'),
                                      item.name, // Cinema name from movieSelect item
                                      location.name,
                                      item.imageUri // Passing the movieSelect item logo
                                    )}
                                    style={styles.timeButton}
                                  >
                                    <Text style={{ color: 'white', padding: 4, fontSize: 10 }}>{showtime.startTime} -</Text>
                                    <Text style={{ color: 'white', padding: 4, fontSize: 10 }}>{showtime.endTime}</Text>
                                  </TouchableOpacity>
                                ))
                              }
                            </View>
                          )}
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                          <TouchableOpacity onPress={() => handleLocationClick(location.id)}>
                            <Icon name="angle-right" size={20} color={'white'} />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Tickets

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
  scrollViewContent: {
    flexGrow: 1,
  },
  project_text: {
    width: 46,
    height: 60,
    padding: 10,
    margin: 5,
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  project_fpoly: {
    color: 'white',
    fontWeight: 'bold',
  },
  project_movie: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  timeSlot: {
    padding: 10,
    backgroundColor: 'rgba(87, 110, 132, 1)',
    margin: 4,
    padding: 4,
    borderRadius: 20,
    width: 60,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(87, 110, 132, 1)',
    margin: 4,
    padding: 6,
    borderRadius: 20,
    width: 110,
    height: 32,
  },
  selectedButton: {
    backgroundColor: 'rgba(0, 64, 266, 0.6)',
  },
  buttonText: {
    color: 'white',
  },
  cinemaItem: {
    margin: 10,
    width: 46,
    height: 46,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(131, 131, 131, 0.6)',
    borderRadius: 10,
  },
  logo: {
    width: 60,
    height: 35,
    resizeMode: 'center',
  },
  selectedItem: {
    borderColor: 'rgba(0, 131, 266, 0.6)',
  },
  timeButton: {
    borderWidth: 1,
    width: 110,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 4,
    borderRadius: 4,
    borderColor: 'rgba(131, 131, 131, 0.6)',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
})