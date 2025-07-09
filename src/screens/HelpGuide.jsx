
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const PRIMARY = '#388E3C';
// const BG_LIGHT = '#F7F8FA';
// const CARD_BG = '#FFFFFF';
// const TEXT_DARK = '#222';
// const TEXT_FADED = '#666';
// const BORDER = '#E0E0E0';

// const HelpGuideScreen = ({ route, navigation }) => {
//   const { userType } = route.params;

//   const farmerFaq = [
//     {
//       title: 'How to list Fruit?',
//       content:
//         'To list a fruit, \n\n1) go to the "My Fruits" section, \n2) tap the "+" icon,\n3) enter product details like name, weight, price, and upload a photo. \n4) Then tap "List".',
//       image: require('./assets/guide.jpg'),
//     },
//     {
//       title: 'How to delete Listed Fruit?',
//       content:
//         'To delete listed fruit, \n\n1) Open the "My Fruits" section. \n2) Tap the three-dot menu next to the item you want to remove, then select "Delete". \n3) Confirm to remove the listing.',
//       image: require('./assets/guide.jpg'),

//     },
//     {
//       title: 'How App works?',
//       content:
//         'The app connects farmers and buyers directly. You list your crops, and buyers can view, negotiate, and order directly from you.',
//       image: require('./assets/guide.jpg'),
//     },
//     {
//       title: 'How to manage Listed Fruit?',
//       content:
//         'To manage listed fruits, \n\n1) Go to "My Fruits" to edit quantity, price, or availability. \n2) You can also pause or update your listing anytime from this section.',
//       image: require('./assets/guide.jpg'),
//     },
//   ];

//   const buyerFaq = [
//     {
//       title: 'How to Deal with listed fruits?',
//       content:
//         'To deal with listed fruits,\n\n1) go to the product details and click "Contact Seller" or "Place Order".\n2) You can chat or call the farmer directly.',
//       image: require('./assets/guide.jpg'),
//     },
//     {
//       title: 'Filter usecase',
//       content:
//         'Use filters like location, price, fruit type, or freshness to quickly find the produce that best fits your requirements.',
//       image: require('./assets/guide.jpg'),
//     },
//     {
//       title: 'How to manage Fruits?',
//       content:
//         'To manage fruits, \n\n1) Go to your "Orders" or "Deals" section to track ongoing orders. \n2) You can also save or favorite specific listings for easy access.',
//       image: require('./assets/guide.jpg'),
//     },
//   ];

//   const faqList = userType === 'farmer' ? farmerFaq : buyerFaq;
//   const faqTitle = userType === 'farmer' ? "Farmer's FAQ" : "Buyer's FAQ";

//   // Navigate to FAQ detail page
//   const handleFaqPress = (item) => {
//     navigation.navigate('FaqDetail', {
//       title: item.title,
//       content: item.content,
//       image: item.image,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Help Guide</Text>
//       </View>

//       <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
//         <Text style={styles.sectionTitle}>{faqTitle}</Text>

//         {faqList.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.card}
//             activeOpacity={0.85}
//             onPress={() => handleFaqPress(item)}
//           >
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Icon name="angle-right" size={22} color={PRIMARY} />
//             </View>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: BG_LIGHT,
//   },
//   header: {
//     backgroundColor: BG_LIGHT,
//     paddingTop: 54,
//     paddingBottom: 18,
//     paddingHorizontal: 22,
//     borderBottomLeftRadius: 30,
//     borderBottomRightRadius: 30,
//     marginBottom: 10,
//     shadowColor: PRIMARY,
//     shadowOpacity: 0.08,
//     shadowRadius: 10,
//     elevation: 10,
//   },
//   headerText: {
//     color: TEXT_DARK,
//     fontSize: 28,
//     fontWeight: '700',
//     letterSpacing: 0.2,
//   },
//   body: {
//     paddingHorizontal: 16,
//     paddingBottom: 32,
//     paddingTop: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: 18,
//     color: TEXT_DARK,
//     letterSpacing: 0.2,
//   },
//   card: {
//     backgroundColor: CARD_BG,
//     borderRadius: 16,
//     padding: 18,
//     marginBottom: 14,
//     shadowColor: '#000',
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 2,
//     borderWidth: 1,
//     borderColor: BORDER,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: TEXT_DARK,
//     flex: 1,
//     marginRight: 10,
//   },
// });

// export default HelpGuideScreen;








import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PRIMARY = '#388E3C';
const BG_LIGHT = '#F7F8FA';
const CARD_BG = '#FFFFFF';
const TEXT_DARK = '#222';
const TEXT_FADED = '#666';
const BORDER = '#E0E0E0';

const HelpGuideScreen = ({ route, navigation }) => {
  const { userType } = route.params;

  // Add a 'category' field to each FAQ
  const farmerFaq = [
    {
      title: 'How to list Fruit?',
      content:
        'To list a fruit, \n\n1) Go to the "My Fruits" section, \n2) Tap the "+" icon,\n3) Enter product details like name, weight, price, and upload a photo. \n4) Then tap "List".',
      image: require('./assets/guide.jpg'),
      category: 'List an Item',
    },
    {
      title: 'How to delete Listed Fruit?',
      content:
        'To delete listed fruit, \n\n1) Open the "My Fruits" section. \n2) Tap the three-dot menu next to the item you want to remove, then select "Delete". \n3) Confirm to remove the listing.',
      image: require('./assets/guide.jpg'),
      category: 'Delete a listed Item',
    },
    {
      title: 'How App works?',
      content:
        'The app connects farmers and buyers directly. You list your crops, and buyers can view, negotiate, and order directly from you.',
      image: require('./assets/guide.jpg'),
      category: 'Profile',
    },
    {
      title: 'How to manage Listed Fruit?',
      content:
        'To manage listed fruits, \n\n1) Go to "My Fruits" to edit quantity, price, or availability. \n2) You can also pause or update your listing anytime from this section.',
      image: require('./assets/guide.jpg'),
      category: 'Manage listed Item',
    },
  ];

  const buyerFaq = [
    {
      title: 'How to Deal with listed fruits?',
      content:
        'To deal with listed fruits,\n\n1) go to the product details and click "Contact Seller" or "Place Order".\n2) You can chat or call the farmer directly.',
      image: require('./assets/guide.jpg'),
      category: 'Buy an Item ',
    },
    {
      title: 'Filter usecase',
      content:
        'Use filters like location, price, fruit type, or freshness to quickly find the produce that best fits your requirements.',
      image: require('./assets/guide.jpg'),
      category: 'Go to search',
    },
    {
      title: 'How to manage Fruits?',
      content:
        'To manage fruits, \n\n1) Go to your "Orders" or "Deals" section to track ongoing orders. \n2) You can also save or favorite specific listings for easy access.',
      image: require('./assets/guide.jpg'),
      category: 'Manage your orders',
    },
  ];

  const faqList = userType === 'farmer' ? farmerFaq : buyerFaq;
  const faqTitle = userType === 'farmer' ? "Farmer's FAQ" : "Buyer's FAQ";

  // Get unique categories for the button(s)
  const categories = Array.from(new Set(faqList.map(faq => faq.category)));

  // Navigate to FAQ detail page
  const handleFaqPress = (item) => {
    navigation.navigate('FaqDetail', {
      title: item.title,
      content: item.content,
      image: item.image,
      category: item.category, 
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help Guide</Text>
      </View>

      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>{faqTitle}</Text>

        {faqList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => handleFaqPress(item)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Icon name="angle-right" size={22} color={PRIMARY} style={{ marginLeft: 8 }} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG_LIGHT,
  },
  header: {
    backgroundColor: BG_LIGHT,
    paddingTop: 54,
    paddingBottom: 18,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    shadowColor: PRIMARY,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  headerText: {
    color: TEXT_DARK,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  body: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 18,
    color: TEXT_DARK,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: BORDER,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: TEXT_DARK,
    flex: 1,
    marginRight: 10,
  },
  categoryPill: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginLeft: 4,
    alignSelf: 'center',
  },
  categoryText: {
    color: PRIMARY,
    fontWeight: '700',
    fontSize: 12,
    letterSpacing: 0.2,
  },
  categoryButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: BORDER,
    backgroundColor: BG_LIGHT,
  },
  categoryButton: {
    backgroundColor: PRIMARY,
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 10,
    marginHorizontal: 6,
    elevation: 2,
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.2,
  },
});

export default HelpGuideScreen;