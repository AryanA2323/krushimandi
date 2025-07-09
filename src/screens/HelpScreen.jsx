
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const PRIMARY = '#388E3C';
const ACCENT = '#FFEB3B';
const BG_LIGHT = '#F1F8E9';
const CARD_BG = '#FFFFFF';
const TEXT_DARK = '#222';
const TEXT_LIGHT = '#fff';
const BORDER = '#C8E6C9';

const CARD_WIDTH = (width - 48) / 2;

const quickActions = [
  {
    title: 'Paytee\nLine',
    image: require('./assets/help2.jpg'), 
    onPress: () => alert('Paytee Line clicked'),
  },
  {
    title: 'Live\nChat',
    image: require('./assets/help1.jpg'), 
    onPress: () => alert('Live Chat clicked'),
  },
];

const assistanceList = [
  {
    title: 'Help Guide',
    icon: 'help-circle-outline',
    onPress: () => alert('Help Guide clicked'),
  },
  {
    title: 'Payments',
    icon: 'wallet-outline',
    onPress: () => alert('Payments clicked'),
  },
  {
    title: 'Loans',
    icon: 'briefcase-outline',
    onPress: () => alert('Loans clicked'),
  },
  {
    title: 'Crypto',
    icon: 'chart-bar',
    onPress: () => alert('Crypto clicked'),
  },
];

const HelpCenterScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchBarWrapper}>
          <Icon name="magnify" size={20} color="#BDBDBD" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search by topics"
            placeholderTextColor="#BDBDBD"
            style={styles.searchBar}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickRow}>
          <TouchableOpacity
            style={styles.quickCard}
            activeOpacity={0.85}
          >
            <ImageBackground
              source={quickActions[0].image}
              style={styles.quickImageBg}
              imageStyle={styles.quickImageBgImg}
              resizeMode="cover"
            >
              <View style={styles.quickTitleWrapper}>
                <Text style={styles.quickTitle}>{quickActions[0].title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            activeOpacity={0.85}
          >
            <ImageBackground
              source={quickActions[1].image}
              style={styles.quickImageBg}
              imageStyle={styles.quickImageBgImg}
              resizeMode="cover"
            >
              <View style={styles.quickTitleWrapper}>
                <Text style={styles.quickTitle}>{quickActions[1].title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>


        {/* Assistance Section */}
        <View style={styles.assistSection}>
          <Text style={styles.assistSectionTitle}>Financial Assistance Hub</Text>


            <TouchableOpacity
              style={styles.assistCard}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('HelpGuide', { userType: 'farmer' })}
            >
              <View style={styles.assistLeft}>
                <View style={styles.assistIconCircle}>
                  <Icon name={assistanceList[0].icon} size={22} color="#BDBDBD" />
                </View>
                <Text style={styles.assistText}>{assistanceList[0].title}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#E57373" />
            </TouchableOpacity>

            
            <TouchableOpacity
              style={styles.assistCard}
              activeOpacity={0.85}
            >
              <View style={styles.assistLeft}>
                <View style={styles.assistIconCircle}>
                  <Icon name={assistanceList[1].icon} size={22} color="#BDBDBD" />
                </View>
                <Text style={styles.assistText}>{assistanceList[1].title}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#E57373" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.assistCard}
              activeOpacity={0.85}
            >
              <View style={styles.assistLeft}>
                <View style={styles.assistIconCircle}>
                  <Icon name={assistanceList[2].icon} size={22} color="#BDBDBD" />
                </View>
                <Text style={styles.assistText}>{assistanceList[2].title}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#E57373" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.assistCard}
              activeOpacity={0.85}
            >
              <View style={styles.assistLeft}>
                <View style={styles.assistIconCircle}>
                  <Icon name={assistanceList[3].icon} size={22} color="#BDBDBD" />
                </View>
                <Text style={styles.assistText}>{assistanceList[3].title}</Text>
              </View>
              <Icon name="chevron-right" size={24} color="#E57373" />
            </TouchableOpacity>


        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  header: {
    backgroundColor: '#F7F8FA',
    paddingTop: 54,
    paddingBottom: 18,
    paddingHorizontal: 22,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#181818',
    letterSpacing: 0.2,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 10,
  },
  searchBar: {
    fontSize: 16,
    flex: 1,
    color: '#222',
    padding: 0,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  quickCard: {
    width: CARD_WIDTH,
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 2,
    backgroundColor: '#F5F6FA',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 10,
  },
  quickImageBgImg: {
    borderRadius: 18,
    opacity: 0.4,
  },
  quickTitleWrapper: {
    width: '100%',
    paddingLeft: 16,
    paddingBottom: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  quickTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#181818',
    zIndex: 2,
    textAlign: 'left',
  },
  quickImageBg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  assistSection: {
    backgroundColor: '#F7F8FA',
    borderRadius: 18,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 4,
  },
  assistSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 15,
    marginLeft: 2,
    letterSpacing: 0.2,
  },
  assistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 14,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 5,
  },
  assistLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assistIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F3F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  assistText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '500',
  },
});

export default HelpCenterScreen;