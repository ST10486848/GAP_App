import React, { useState } from 'react';
import {StyleSheet,View,Text,ScrollView,LayoutAnimation, TouchableOpacity, Button,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
const courses = { LongCourses: [ { id: 1, name: 'First Aid' }, { id: 2, name: 'Sewing' }, { id: 3, name: 'Landscaping' }, { id: 4, name: 'Life Skills' } ],
                  ShortCourses: [ { id: 1, name: 'Child Minding' }, { id: 2, name: 'Cooking' }, { id: 3, name: 'Garden Maintenance' } ] 
                }; //This is the data structure that holds the courses offered by the organization
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="First Aid" component={FirstAid} />
        <Stack.Screen name="Sewing" component={Sewing} />
        <Stack.Screen name="Landscaping" component={Landscaping} />
        <Stack.Screen name="Life Skills" component={LifeSkills} />
        <Stack.Screen name="Child minding" component={ChildMinding} />
        <Stack.Screen name="Cooking" component={Cooking} />
        <Stack.Screen name="Garden Maintenance" component={GardenMaintenance} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Homepage() {
  const [showLongCourses, setshowLongCourses] = useState(false); // Those lines indicate whether the sections are expanded or collapsed
  const [showShortCourses, setshowShortCourses] = useState(false); // The intial state is collapsed (false) 

  // Function used to change the state of the buttons 
  const LongCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // This line makes the animation of the button smooth
    setshowLongCourses(!showLongCourses); // This line changes the state of the the button 
  };

  const ShortCoursesClick = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setshowShortCourses(!showShortCourses);
  };

  return ( // Basically the whole page is a scroll view and it contains the history of the organization and the courses offered 
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      {/* Logo and Organization Info */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Organization Logo</Text> {/* Replace with actual logo image */}
          {/* <Image source={logo} style={styles.logo} /> */}
        </View>
        <Text style={styles.title}>Empowering the Nation </Text>
        <Text style={styles.description}>
          Founded in 2005, our organization has been dedicated to providing quality education 
          and skill development programs to communities across SouthAfrica. We believe in 
          empowering individuals through practical knowledge and hands-on training.
        </Text>
        <Text style={styles.description}>
          Our vision is to create a society where everyone has access to education and 
          opportunities for personal and professional growth, regardless of their background 
          or circumstances.
        </Text>
      </View>

      {/* Courses Section */}
      <View style={styles.coursesSection}>
        <Text style={styles.sectionTitle}>Offered courses</Text>
        {/* Long Term Courses */}
        <View style={styles.courseCategory}>
          <TouchableOpacity style={styles.categoryHeader} onPress={LongCoursesClick}>
            <Text style={styles.categoryTitle}>Long Term Courses</Text> {/* This section reprsent the long courses button */}
            <Text style={styles.arrow}>
              {showLongCourses ? '▼' : '►'} {/* This line changes the arrow direction based on the state of the button */}
            </Text>
          </TouchableOpacity>
          
          {showLongCourses && ( // This line first checks if the state od the button is true (basically open) then shows the courses
            <View style={styles.courseList}>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>First Aid</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Sewing</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Landscaping</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Life Skills</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Short Term Courses */}
        <View style={styles.courseCategory}>
          <TouchableOpacity style={styles.categoryHeader} onPress={ShortCoursesClick}>
            <Text style={styles.categoryTitle}>Short Term Courses</Text>
            <Text style={styles.arrow}>
              {showShortCourses ? '▼' : '►'}
            </Text>
          </TouchableOpacity>
          
          {showShortCourses && ( 
            <View style={styles.courseList}> 
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Child Minding</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Cooking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.courseItem}>
                <Text style={styles.courseName}>Garden Maintenance</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
// Each of the below functions represent a page for each of the long course. 
function FirstAid({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>First Aid</Text>
      </TouchableOpacity>
      <Button
        title="First Aid"
        onPress={() => {
          navigation.navigate('First Aid');
        }}
      />
    </View>
  );
}
function Sewing({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Sewing</Text>
      </TouchableOpacity>
      <Button
        title="Sewing"
        onPress={() => {
          navigation.navigate('Sewing');
        }}
      />
    </View>
  );
}
function Landscaping({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Landscaping</Text>
      </TouchableOpacity>
      <Button
        title="Landscaping"
        onPress={() => {
          navigation.navigate('Landscaping');
        }}
      />
    </View>
  );
}

function LifeSkills({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Life Skills</Text>
      </TouchableOpacity>
      <Button
        title="Life Skills"
        onPress={() => {
          navigation.navigate('Life Skills');
        }}
      />
    </View>
  );
}
// Each of the below functions represent a page for each of the shorts course.
function ChildMinding({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Child Minding</Text>
      </TouchableOpacity>
      <Button
        title="Child Minding"
        onPress={() => {
          navigation.navigate('Child Minding');
        }}
      />
    </View>
  );
}

function Cooking({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Cooking</Text>
      </TouchableOpacity>
      <Button
        title="Cooking"
        onPress={() => {
          navigation.navigate('Cooking');
        }}
      />
    </View>
  );
}
function GardenMaintenance({ navigation }: { navigation: any }) {
  return (
    <View style={styles.courseList}>
      <TouchableOpacity style={styles.courseItem}>
        <Text style={styles.courseName}>Garden Maintenance</Text>
      </TouchableOpacity>
      <Button
        title="Garden Maintenance"
        onPress={() => {
          navigation.navigate('Garden Maintenance');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#e1e8ed',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    fontSize: 14,
    color: '#657786',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c2938',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },
  coursesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c2938',
    marginBottom: 16,
    textAlign: 'center',
  },
  courseCategory: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#4a6da7',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  arrow: {
    fontSize: 18,
    color: 'white',
  },
  courseList: {
    padding: 8,
  },
  courseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#edf2f7',
  },
  courseName: {
    fontSize: 16,
    color: '#2d3748',
  },
});
