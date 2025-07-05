import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
  StatusBar,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const PRIMARY = '#388E3C';      // Deep green
const ACCENT = '#FFEB3B';       // Yellow accent
const BG_LIGHT = '#F1F8E9';     // Light green background
const CARD_BG = '#FFFFFF';      // Card background
const TEXT_DARK = '#222';
const TEXT_LIGHT = '#fff';
const BORDER = '#C8E6C9';

const ProfileScreen = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const handleRatingClick = () => {
    alert('Navigate to rating section');
  };

  const completedOrders = [
    { order: 'Wheat - 10 Bags', date: '10 Jun 2025', soldBy: 'Anil Sharma' },
    { order: 'Corn - 15 Crates', date: '18 Jun 2025', soldBy: 'Meena Traders' },
    { order: 'Tomatoes - 200kg', date: '22 Jun 2025', soldBy: 'FreshMart' },
    { order: 'Onions - 300kg', date: '28 Jun 2025', soldBy: 'Veggie World' },
  ];

  const customerReviews = [
    { name: 'John D.', rating: 5, review: 'Great quality produce!' },
    { name: 'Maya S.', rating: 4, review: 'Fast delivery and fresh goods.' },
    { name: 'Ravi T.', rating: 5, review: 'Very polite and professional.' },
  ];

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
      {/* Header */}

        <View style={styles.headerOverlay}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SL</Text>
            </View>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.userName}>Kishor Sharma</Text>
            <Text style={styles.phone}>+91 9789390456</Text>
            <View style={styles.ratingRow}>
              <TouchableOpacity onPress={handleRatingClick} style={styles.ratingBtn}>
                <Icon name="star" size={18} color={ACCENT} />
                <Text style={styles.ratingText}>4.9</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.editBtn}>
            <Icon name="pencil" size={20} color={ACCENT} />
          </TouchableOpacity>
        </View>

      {/* Completed Orders */}
      <View style={styles.ordersSection}>
        <Text style={styles.sectionTitle}>Completed Orders</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {completedOrders.map((order, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.orderCard}
              activeOpacity={0.85}
              onPress={() => handleOrderClick(order)}
            >
              <Icon name="shopping-bag" size={22} color={PRIMARY} style={{ marginBottom: 6 }} />
              <Text style={styles.orderText}>{order.order}</Text>
              <Text style={styles.orderMeta}>Date: {order.date}</Text>
              <Text style={styles.orderMeta}>Sold By: {order.soldBy}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Order Details Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="shopping-bag" size={32} color={PRIMARY} style={{ marginBottom: 10 }} />
            <Text style={styles.modalTitle}>Order Details</Text>
            {selectedOrder && (
              <>
                <Text style={styles.modalLabel}>Product</Text>
                <Text style={styles.modalValue}>{selectedOrder.order}</Text>
                <Text style={styles.modalLabel}>Sold By</Text>
                <Text style={styles.modalValue}>{selectedOrder.soldBy}</Text>
                <Text style={styles.modalLabel}>Date</Text>
                <Text style={styles.modalValue}>{selectedOrder.date}</Text>
              </>
            )}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCloseButton}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Customer Reviews */}
      <ScrollView style={styles.body} >
        <Text style={styles.sectionTitle}>Customer Reviews</Text>
        {customerReviews.map((review, idx) => (
          <View key={idx} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <View style={styles.reviewAvatar}>
                <Text style={styles.reviewAvatarText}>
                  {review.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.reviewName}>{review.name}</Text>
                <View style={styles.ratingRow}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      size={15}
                      color={i < review.rating ? ACCENT : BORDER}
                      style={styles.reviewStar}
                    />
                  ))}
                </View>
              </View>
              <Icon name="quote-right" size={20} color={PRIMARY} />
            </View>
            <Text style={styles.reviewText}>{review.review}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BG_LIGHT,
  },
  headerBackground: {
    width: '100%',
    height: 180,
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(56,142,60,0.85)',
    padding: 18,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatarWrapper: {
    marginRight: 14,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: ACCENT,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: PRIMARY,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    color: TEXT_LIGHT,
    fontWeight: '700',
    marginBottom: 2,
  },
  phone: {
    color: '#C8E6C9',
    fontSize: 14,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff2',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 8,
    marginTop: 2,
  },
  ratingText: {
    color: ACCENT,
    fontWeight: '700',
    marginLeft: 5,
    fontSize: 15,
  },
  editBtn: {
    marginLeft: 12,
    backgroundColor: '#fff2',
    padding: 8,
    borderRadius: 50,
  },
  ordersSection: {
    backgroundColor: CARD_BG,
    marginHorizontal: 18,
    marginTop: 20,
    borderRadius: 18,
    padding: 16,
    shadowColor: PRIMARY,
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    zIndex: 10,
  },
  sectionTitle: {
    color: PRIMARY,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  orderCard: {
    backgroundColor: BG_LIGHT,
    borderRadius: 12,
    padding: 14,
    marginRight: 14,
    minWidth: 150,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: PRIMARY,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  orderText: {
    fontSize: 15,
    color: PRIMARY,
    fontWeight: '700',
    marginBottom: 2,
  },
  orderMeta: {
    fontSize: 12,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 18,
    marginTop: 18,
  },
  reviewCard: {
    marginTop: 18,
    padding: 16,
    borderRadius: 14,
    backgroundColor: CARD_BG,
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: PRIMARY,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BG_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: PRIMARY,
  },
  reviewAvatarText: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 17,
  },
  reviewName: {
    fontWeight: '700',
    fontSize: 15,
    color: TEXT_DARK,
    marginBottom: 2,
  },
  reviewStar: {
    marginRight: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
    fontStyle: 'italic',
    marginLeft: 4,
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(56,142,60,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: CARD_BG,
    padding: 28,
    borderRadius: 18,
    width: '80%',
    alignItems: 'center',
    elevation: 8,
    borderWidth: 1,
    borderColor: BORDER,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: PRIMARY,
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 13,
    color: '#888',
    marginTop: 8,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  modalValue: {
    fontSize: 16,
    color: TEXT_DARK,
    fontWeight: '500',
    marginBottom: 2,
    alignSelf: 'flex-start',
  },
  modalCloseButton: {
    marginTop: 22,
    backgroundColor: PRIMARY,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalCloseText: {
    color: TEXT_LIGHT,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ProfileScreen;