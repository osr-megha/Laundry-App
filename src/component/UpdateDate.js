import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const UpdateDate = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState("Select Date");

  const [selectedTime, setSelectedTime] = useState("Select Time");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    console.warn("A date has been picked: ", date);

    const dt = new Date(date);
    const x = dt.toISOString().split("T"); // here the for ex: 2023-01-14T08:07:33.612Z - now we are spliting the string from this "T" onwards which is common in both date and time console that we get

    const x1 = x[0].split("-"); // here splitting from "-" of ex: 2023-01-14

    console.log(x1[2] + "/" + x1[1] + "/" + x1[0]); // ie getting the array values of x1

    // const cDate = (x1[2] + "/" + x1[1] + "/" + x1[0]);
     
    // setSelectedDate(cDate.getDay()) ;
    setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    // setSelectedDate = cDate(moment().format('ddd, MMM Do YYYY'));
    // console.log(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (date) => {
    console.warn("A time has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toLocaleTimeString();
    console.log(x);
    let hours = dt.getHours();
    let am_pm = hours >= 12 ? "PM" : "AM";

    if (hours >= 12) {
      hours -= 12;
    }

    let cTime = hours + ":" + dt.getMinutes() + " " + am_pm;

    setSelectedTime(cTime);
    hideTimePicker();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={styles.dateBtn} onPress={() => showDatePicker()}>
        <Text>{selectedDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dateBtn} onPress={() => showTimePicker()}>
        <Text>{selectedTime}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        minimumDate={new Date(moment().format('YYYY-MM-DD'))}
        maximumDate={new Date(moment().add(15, "days").format('YYYY-MM-DD'))}
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        is24Hour={false}
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dateBtn: {
    margin: 2,
    width: "70%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default UpdateDate;
