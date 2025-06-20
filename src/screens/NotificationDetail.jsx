// NotificationDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationDetail = ({ route }) => {
  const { title, message, date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default NotificationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#eef5e9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: '#555',
  },
});
