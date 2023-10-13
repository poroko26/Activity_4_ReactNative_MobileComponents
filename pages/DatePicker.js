import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import DatePicker from 'react-native-modern-datepicker';

export default function Date_Time_Picker() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  const handleOpenPress = () => {
    setOpen(true);
  }

  const handleClosePress = () => {
    setOpen(false);
  }

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  }

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.selectedDate}>
          {date || 'date'}
        </Text>
      </View>

      <TouchableOpacity onPress={handleOpenPress}>
        <Text style={styles.selectBtn}>Select Date</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={handleClosePress}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="datetime"
              onSelectedChange={handleDateChange}
              selected={date}
              display="spinner"
            />

            <TouchableOpacity onPress={handleClosePress}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectBtn: {
    backgroundColor: '#48cae4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 15,
    color: '#fff'
  },
  closeBtn: {
    backgroundColor: '#48cae4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  centered: {
    width: 200,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modalView: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "90%",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});





