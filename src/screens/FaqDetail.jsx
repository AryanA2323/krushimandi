// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// const PRIMARY = '#388E3C';
// const BG_LIGHT = '#F7F8FA';
// const CARD_BG = '#FFFFFF';
// const TEXT_DARK = '#222';

// const FaqDetail = ({ route }) => {
//   const { title, content, image } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>{title}</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.body}>
//         {image && (
//           <View style={styles.imageWrapper}>
//             <View style={styles.imageShadow}>
//               <Image
//                 source={image}
//                 style={styles.image}
//                 resizeMode="contain"
//               />
//             </View>
//           </View>
//         )}
//         <View style={styles.cardContent}>
//           <Text style={styles.content}>{content}</Text>
//         </View>
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
//     fontSize: 22,
//     fontWeight: '700',
//     letterSpacing: 0.2,
//     textAlign: 'center',
//   },
//   body: {
//     padding: 24,
//     alignItems: 'stretch',
//   },
//   imageWrapper: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 18,
//     width: '100%',
//   },
//   imageShadow: {
//     borderRadius: 24,
//     backgroundColor: '#fff',
//     shadowColor: PRIMARY,
//     shadowOpacity: 0.13,
//     shadowRadius: 16,
//     shadowOffset: { width: 0, height: 8 },
//     elevation: 8,
//     padding: 8,
//   },
//   image: {
//     width: 180,
//     height: 350,
//     borderRadius: 16,
//     backgroundColor: '#F0F4F8',
//   },
//   cardContent: {
//     backgroundColor: CARD_BG,
//     borderRadius: 18,
//     padding: 20,
//     shadowColor: PRIMARY,
//     shadowOpacity: 0.06,
//     shadowRadius: 8,
//     elevation: 2,
//     marginTop: 8,
//   },
//   content: {
//     fontSize: 16,
//     color: TEXT_DARK,
//     lineHeight: 24,
//     textAlign: 'left',
//     fontWeight: '500',
//     letterSpacing: 0.1,
//   },
// });

// export default FaqDetail;











import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const PRIMARY = '#388E3C';
const BG_LIGHT = '#F7F8FA';
const CARD_BG = '#FFFFFF';
const TEXT_DARK = '#222';

const FaqDetail = ({ route, navigation }) => {
  // Now expecting category in params
  const { title, content, image, category } = route.params;

  // Handler for category button (optional: filter, go back, etc.)
  const handleCategoryPress = () => {
    // Example: just go back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        {image && (
          <View style={styles.imageWrapper}>
            <View style={styles.imageShadow}>
              <Image
                source={image}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
        )}
        <View style={styles.cardContent}>
          <Text style={styles.content}>{content}</Text>
        </View>
      </ScrollView>
      {category && (
        <View style={styles.categoryButtonRow}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={handleCategoryPress}
            activeOpacity={0.85}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  body: {
    padding: 24,
    alignItems: 'stretch',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    width: '100%',
  },
  imageShadow: {
    borderRadius: 24,
    backgroundColor: '#fff',
    shadowColor: PRIMARY,
    shadowOpacity: 0.13,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    padding: 8,
  },
  image: {
    width: 180,
    height: 350,
    borderRadius: 16,
    backgroundColor: '#F0F4F8',
  },
  cardContent: {
    backgroundColor: CARD_BG,
    borderRadius: 18,
    padding: 20,
    shadowColor: PRIMARY,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginTop: 8,
  },
  content: {
    fontSize: 16,
    color: TEXT_DARK,
    lineHeight: 35,
    textAlign: 'left',
    fontWeight: '500',
    letterSpacing: 0.8,
  },
  categoryButtonRow: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: BG_LIGHT,
    alignItems: 'center',
  },
  categoryButton: {
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: PRIMARY,
    borderRadius: 18,
    paddingHorizontal: 28,
    paddingVertical: 12,
    elevation: 2,
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.2,
  },
});

export default FaqDetail;