
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = ({ navigation }) => {
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    {
      id: '1',
      title: 'Vista rewards club...',
      message: 'Earn Points without making a purchase.\nComplete your first mission today!',
      date: 'Dec 16, 2023',
    },
    {
      id: '2',
      title: 'The Vista rewards cl...',
      message: 'Keep paying with Vista to boost your points and unlock rewards.',
      date: 'Dec 12, 2023',
    },
    {
      id: '3',
      title: 'The Vista rewards cl...',
      message: 'Keep paying with Vista to boost your points and unlock rewards.',
      date: 'Dec 12, 2023',
    },
    {
      id: '4',
      title: 'The Vista rewards cl...',
      message: 'Keep paying with Vista to boost your points and unlock rewards.',
      date: 'Dec 12, 2023',
    },
    {
      id: '5',
      title: 'The Vista rewards cl...',
      message: 'Keep paying with Vista to boost your points and unlock rewards.',
      date: 'Dec 12, 2023',
    },
    {
      id: '6',
      title: 'The Vista rewards cl...',
      message: 'Keep paying with Vista to boost your points and unlock rewards.',
      date: 'Dec 12, 2023',
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity onPress={() => setShowSettings(true)}>
          <Icon name="settings-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Previously</Text>



      <FlatList
  data={notifications}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('NotificationDetail', {
          title: item.title,
          message: item.message,
          date: item.date,
        })
      }
    >
      <View style={styles.notificationCard}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>V.</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.cardHeader}>
            <Text style={styles.notifTitle}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )}
/>

      <Text style={styles.missing}>
        Missing notifications?{' '}
        <Text style={styles.link}>Go to historical notifications.</Text>
      </Text>



      <Modal visible={showSettings} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Notification Settings</Text>
            <Text>- Email Notifications: On</Text>
            <Text>- Push Notifications: Off</Text>
            <Pressable style={styles.modalButton} onPress={() => setShowSettings(false)}>
              <Text style={{ color: 'white' }}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6DBE45',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  notificationCard: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 8,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
  iconCircle: {
    backgroundColor: '#84d365',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#000',
    fontWeight: 'bold',
  },
  notifTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  message: {
    fontSize: 13,
    marginTop: 4,
    color: '#333',
  },
  missing: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    marginTop: 20,
    marginBottom: 25,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    gap: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    marginTop: 15,
    backgroundColor: '#6DBE45',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
