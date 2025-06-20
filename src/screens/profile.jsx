import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Solo Reader</Text>

      <View style={styles.card}>
        <Text style={styles.upgradeTitle}>Upgrade to Premium</Text>
        <Text style={styles.subText}>
          Enjoy an Ad-Free Experience – Upgrade to Premium for Seamless Browsing
        </Text>
      </View>


      <View style={styles.card}>
        {/* <TouchableOpacity style={styles.button}> */}
          <Text style={styles.buttonText}>Remove Ads Only</Text>
        {/* </TouchableOpacity> */}
      </View>


      <View style={styles.card}>
        {renderOption("Language", "language")}
        {renderOption("Privacy Policy", "lock")}
        {renderOption("Terms of Services", "book")}
        {renderOption("About App", "info")}
      </View>

      <View style={styles.card}>
        {renderOption("Rate Us", "star")}
        {renderOption("Share with Friends", "share")}
        {renderOption("More Apps", "apps")}
      </View>

      <Text style={styles.restore}>Restore Purchase</Text>
    </ScrollView>
  );
};

const renderOption = (title, iconName) => (
  <TouchableOpacity style={styles.option}>
    <View style={styles.optionContent}>
      <Ionicons name={iconName} size={20} color="#333" style={styles.icon} />
      <Text style={styles.optionText}>{title}</Text>
    </View>
    <MaterialIcons name="chevron-right" size={20} color="#aaa" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  upgradeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 15,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 15,
    marginLeft: 10,
  },
  icon: {
    width: 24,
  },
  restore: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 13,
    color: '#aaa',
  },
});

export default SettingsScreen;
