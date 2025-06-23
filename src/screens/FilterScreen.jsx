import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';

const fruitTypes = [
  { name: 'Apple', icon: 'https://img.icons8.com/color/48/apple.png' },
  { name: 'Banana', icon: 'https://img.icons8.com/color/48/banana.png' },
  { name: 'Grapes', icon: 'https://img.icons8.com/color/48/grapes.png' },
  { name: 'Watermelon', icon: 'https://img.icons8.com/color/48/watermelon.png' },
  { name: 'Orange', icon: 'https://img.icons8.com/color/48/orange.png' },
  { name: 'Pineapple', icon: 'https://img.icons8.com/color/48/pineapple.png' },
];

const additionalFeatures = [
  'Organic',
  'Top Rated',
  'Fresh Stock',
  'On Discount',
  'In season',
  'Off season',
  'In Stock',
  'Out of Stock',
];

const FilterScreen = () => {
  const [selectedFruit, setSelectedFruit] = useState('Apple');
  const [selectedFeatures, setSelectedFeatures] = useState(['Top Rated']);
  const [minPrice, setMinPrice] = useState(30);
  const [maxPrice, setMaxPrice] = useState(250);
  const [minRating, setMinRating] = useState(4);

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Filters</Text>
        <TouchableOpacity>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Selected Tags */}
      <View style={styles.selectedTags}>
        {[`₹${minPrice} - ₹${maxPrice}`, selectedFruit, ...selectedFeatures].map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <Text style={styles.tagClose}>×</Text>
          </View>
        ))}
      </View>

      {/* Fruit Type Section */}
      <Text style={styles.sectionTitle}>Fruit type</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fruitTypes.map((fruit) => (
          <TouchableOpacity
            key={fruit.name}
            style={[
              styles.fruitOption,
              selectedFruit === fruit.name && styles.fruitOptionSelected,
            ]}
            onPress={() => setSelectedFruit(fruit.name)}
          >
            <Image source={{ uri: fruit.icon }} style={styles.fruitIcon} />
            <Text style={styles.fruitText}>{fruit.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Price Range */}
      <Text style={styles.sectionTitle}>Price per kg</Text>
      <View style={styles.sliderContainer}>
        <Slider
          style={{ width: '100%' }}
          minimumValue={0}
          maximumValue={250}
          step={2}
          value={minPrice}
          minimumTrackTintColor="#2E7D32"
          maximumTrackTintColor="#C8E6C9"
          onValueChange={setMinPrice}
        />
        <View style={styles.priceLabels}>
          <Text style={styles.price}>₹{minPrice.toFixed(2)}</Text>
          <Text style={styles.price}>₹{maxPrice.toFixed(2)}</Text>
        </View>
      </View>

      {/* Additional Features */}
      <Text style={styles.sectionTitle}>Additional features</Text>
      <View style={styles.featuresContainer}>
        {additionalFeatures.map((feature) => (
          <TouchableOpacity
            key={feature}
            style={[
              styles.featureTag,
              selectedFeatures.includes(feature) && styles.featureTagSelected,
            ]}
            onPress={() => toggleFeature(feature)}
          >
            <Text
              style={[
                styles.featureText,
                selectedFeatures.includes(feature) && styles.featureTextSelected,
              ]}
            >
              {feature}
            </Text>
          </TouchableOpacity>
        ))}
      </View>



            {/* Customer Rating Filter */}
      <Text style={styles.sectionTitle}>Customer rating</Text>
      <View style={styles.ratingContainer}>
        {[4, 3, 0].map((rating) => (
          <TouchableOpacity
            key={rating}
            style={[
              styles.ratingOption,
              minRating === rating && styles.ratingOptionSelected,
            ]}
            onPress={() => setMinRating(rating)}
          >
            <Text
              style={[
                styles.ratingText,
                minRating === rating && styles.ratingTextSelected,
              ]}
            >
              {rating === 0 ? 'All Ratings' : `⭐ ${rating} & above`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  close: {
    fontSize: 20,
    color: '#555',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  selectedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  tag: {
    flexDirection: 'row',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  tagText: {
    color: 'black',
    marginRight: 4,
  },
  tagClose: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: 'black',
  },
  fruitOption: {
    alignItems: 'center',
    padding: 10,
    margin: 4,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#C8E6C9',
    borderRadius: 10,
  },
  fruitOptionSelected: {
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },
  fruitText: {
    marginTop: 4,
    color: '#2E7D32',
    fontSize: 12,
  },
  fruitIcon: {
    width: 40,
    height: 40,
  },
  sliderContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureTag: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    margin: 4,
  },
  featureTagSelected: {
    backgroundColor: '#2E7D32',
  },
  featureText: {
    color: 'black',
  },
  featureTextSelected: {
    color: '#fff',
  },






      ratingContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 8,
    },
    ratingOption: {
      borderWidth: 1,
      borderColor: 'green',
      borderRadius: 20,
      paddingHorizontal: 12,
      paddingVertical: 6,
      margin: 4,
      backgroundColor: '#fff',
    },
    ratingOptionSelected: {
      backgroundColor: '#4CAF50',
    },
    ratingText: {
      color: '#4CAF50',
      fontSize: 14,
    },
    ratingTextSelected: {
      color: '#fff',
      fontWeight: '600',
    },
    });

export default FilterScreen;

