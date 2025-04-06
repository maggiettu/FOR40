// screens/MatchScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Mock data for matched students
const STUDENTS = [
  {
    id: '1',
    name: 'Selina',
    image: require('../assets/profile.jpg'),
    description: 'Hello! I am a first year ubc student and I would love to connect with you to share a pack of carrots!'
  },
  {
    id: '2',
    name: 'Claire',
    image: require('../assets/profile.jpg'),
    description: 'Hello! I am a first year ubc student and I would love to connect with you to share a pack of carrots!'
  },
  {
    id: '3',
    name: 'Gianna',
    image: require('../assets/profile.jpg'),
    description: 'Hello! I am a first year ubc student and I would love to connect with you to share a pack of carrots!'
  },
  {
    id: '4',
    name: 'Maggie',
    image: require('../assets/profile.jpg'),
    description: 'Hello! I am a first year ubc student and I would love to connect with you to share a pack of carrots!'
  }
];

// CheckCircle component for success icon
const CheckCircle = () => {
  return (
    <View style={styles.checkCircle}>
      <View style={styles.checkmark}>
        <View style={styles.checkmarkStem} />
        <View style={styles.checkmarkKick} />
      </View>
    </View>
  );
};

export default function MatchScreen() {
  const navigation = useNavigation();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    // In a real app, you would navigate to a chat or connection screen
    // navigation.navigate('Chat', { studentId: student.id });
  };

  const goToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goToDashboard} style={styles.homeButton}>
          <Text style={styles.homeIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.matchCard}>
        <CheckCircle />
        
        <Text style={styles.successTitle}>SUCCESS! You have been successfully matched to other students!</Text>
        
        <Text style={styles.chooseText}>Choose who you would like to share with:</Text>
        
        <ScrollView style={styles.studentList}>
          {STUDENTS.map((student) => (
            <TouchableOpacity
              key={student.id}
              style={[
                styles.studentCard,
                selectedStudent?.id === student.id && styles.selectedCard
              ]}
              onPress={() => handleStudentSelect(student)}
            >
              <Image source={student.image} style={styles.studentImage} />
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{student.name}</Text>
                <Text style={styles.studentDescription}>{student.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedStudent && (
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>
              Connect with {selectedStudent.name}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9eeda',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  homeButton: {
    padding: 5,
  },
  homeIcon: {
    fontSize: 24,
  },
  profileButton: {
    padding: 5,
  },
  profileIcon: {
    fontSize: 24,
  },
  matchCard: {
    backgroundColor: '#f9eeda',
    height: '95%',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    padding: 20,
  },
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkmark: {
    transform: [{ rotate: '45deg' }],
    height: 25,
    width: 12,
    marginLeft: 5,
    marginTop: -5,
  },
  checkmarkStem: {
    position: 'absolute',
    height: 25,
    width: 3,
    backgroundColor: '#4CAF50',
    left: 9,
  },
  checkmarkKick: {
    position: 'absolute',
    height: 3,
    width: 12,
    backgroundColor: '#4CAF50',
    bottom: 0,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  chooseText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  studentList: {
    width: '100%',
    marginTop: 10,
  },
  studentCard: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: '#d0f0c0',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  studentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  studentDescription: {
    fontSize: 14,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});