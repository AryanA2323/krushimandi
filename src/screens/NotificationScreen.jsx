import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const notifications = [
  {
    id: '1',
    title: 'Vista rewards club....',
    date: 'Dec 16, 2023',
    description: 'Earn Points without making a purchase\nComplete your first mission today!',
  },
  {
    id: '2',
    title: 'The Vista rewards cl...',
    date: 'Dec 12, 2023',
    description: 'Keep paying with Vista to boost your points and unlock rewards. It’s as simple as that.',
  },
  {
    id: '3',
    title: 'The Vista rewards cl...',
    date: 'Dec 8, 2023',
    description: 'Now you’re a member of Vista rewards club, start picking up points with every purchase.',
  },
  {
    id: '4',
    title: 'The Vista rewards cl...',
    date: 'Dec 8, 2023',
    description: 'Now you’re a member of Vista rewards club, start picking up points with every purchase.',
  },
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>V.</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Previously</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <Text style={styles.footerText}>
        Missing notifications?{' '}
        <Text style={styles.linkText}>Go to historical notifications.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FBDDE0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  date: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
  },
  footerText: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
