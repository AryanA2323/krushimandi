
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Modal } from 'react-native';


const { width } = Dimensions.get('window');





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

  // const handleOrderClick = (order) => {
  //   alert(`Order Details:\n${order.order} \nSold By ${order.soldBy}`);
  // };

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
      {/* Header Background with Blur */}
      <ImageBackground
        source={require('D:/krushimandi/assets/bg.png')}
        style={styles.headerBackground}
        blurRadius={30}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SL</Text>
          </View>

          <View style={styles.userInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>Hi, Kishor Sharma</Text>
              <TouchableOpacity onPress={handleRatingClick}>
                <Icon name="star" size={18} color="#FFD700" style={styles.starIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.phone}>+91 9789390456</Text>
          </View>

          <TouchableOpacity>
            <Text style={styles.edit}>✎</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

      {/* Completed Orders Horizontal Slider */}
      <View style={styles.overlayCard}>
        <Text style={styles.planLabel}>Completed Orders</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {completedOrders.map((order, index) => (
            <TouchableOpacity
              key={index}
              style={styles.orderCard}
              onPress={() => handleOrderClick(order)}
            >
              <Text style={styles.orderText}>{order.order}</Text>
              <Text style={styles.buyerText}>Date: {order.date}</Text>
              <Text style={styles.buyerText}>Sold By: {order.soldBy}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Order Details</Text>
            {selectedOrder && (
              <>
                <Text style={styles.modalItem}>Product: {selectedOrder.order}</Text>
                <Text style={styles.modalItem}>Sold By: {selectedOrder.soldBy}</Text>
                <Text style={styles.modalItem}>Date: {selectedOrder.date}</Text>
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
      {/* <ScrollView style={styles.body} contentContainerStyle={{ paddingTop: 40 }}>
        <Text style={styles.invoiceTitle}>CUSTOMER REVIEWS</Text>

        {customerReviews.map((review, index) => (
          <TouchableOpacity
            key={index}
            style={styles.invoiceItem}
            onPress={() => alert(`Review by ${review.name}:\n\n"${review.review}"`)}
          >
            <Text style={styles.invoiceName}>{review.name}</Text>
            <View style={styles.ratingRow}>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  size={14}
                  color={i < review.rating ? '#FFD700' : '#ccc'}
                />
              ))}
            </View>
            <Text style={styles.invoiceDetail}>{review.review}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}


      {/* Customer Reviews */}
      <ScrollView style={styles.body} contentContainerStyle={{ paddingTop: 40 }}>
        <Text style={styles.invoiceTitle}>CUSTOMER REVIEWS</Text>

        {customerReviews.map((review, index) => (
          <TouchableOpacity
            key={index}
            style={styles.reviewCard}
            activeOpacity={0.85}
            onPress={() => alert(`Review by ${review.name}:\n\n"${review.review}"`)}
          >
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
                      size={16}
                      color={i < review.rating ? '#FFD700' : '#E0E0E0'}
                      style={styles.reviewStar}
                    />
                  ))}
                </View>
              </View>
              <Icon name="quote-right" size={22} color="#B2DFDB" style={{ marginLeft: 8 }} />
            </View>
            <Text style={styles.reviewText}>{review.review}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBackground: {
    padding: 16,
    height: 170,
    paddingBottom: 80,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 0,
  },
  
  overlay: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginLeft: 8,
    marginTop: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#FFEB3B',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  phone: {
    color: '#E0F7FA',
  },
  edit: {
    fontSize: 25,
    color: 'white',
  },
  overlayCard: {
    backgroundColor: '#fff',
    width: width * 0.9,
    alignSelf: 'center',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: 'absolute',
    top: 110,
    zIndex: 10,
  },
  planLabel: {
    color: '#777',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  orderCard: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 10,
    marginRight: 12,
    minWidth: 140,
    justifyContent: 'center',
  },
  orderText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  buyerText: {
    fontSize: 12,
    color: '#444',
    marginTop: 4,
    fontStyle: 'italic',
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 40,
  },
  invoiceTitle: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#777',
  },
  invoiceItem: {
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
  },
  invoiceName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  invoiceDetail: {
    fontSize: 13,
    color: '#555',
  },
  productsSection: {
  marginTop: 90,
  marginLeft: 16,
  marginRight: 16,
},
sectionTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#444',
  marginBottom: 8,
},




reviewCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#F1F8E9',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#B2DFDB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reviewAvatarText: {
    color: '#00695C',
    fontWeight: 'bold',
    fontSize: 17,
  },
  reviewName: {
    fontWeight: '700',
    fontSize: 15,
    color: '#333',
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
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 12,
  width: '80%',
  elevation: 5,
  alignItems: 'center',
},
modalTitle: {
  fontSize: 18,
  fontWeight: '700',
  marginBottom: 12,
},
modalItem: {
  fontSize: 15,
  color: '#333',
  marginVertical: 4,
},
modalCloseButton: {
  marginTop: 16,
  paddingVertical: 8,
  paddingHorizontal: 20,
  backgroundColor: '#4CAF50',
  borderRadius: 8,
},
modalCloseText: {
  color: 'white',
  fontWeight: '600',
},



});

export default ProfileScreen;


