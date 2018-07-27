# Quench

Water is the most underutilized tool when it comes to your health. From clearing your skin and helping with headaches to giving you an endless supply of energy, simply drinking enough H2O each day can save you a lot of money on skin care products, pain relievers and vitamins.

We all know that drinking water is essential for heathly living. Give me an ailment and usually my first response will annoyingly be "Are you hydrated enough? Drink more water!" That's all well but it can be hard to know how much water you should be drinking and its too easy to forget to drink water throughout the day with our busy schedules. Sometimes, its even a matter of finding water when you're out and about (and who wants to BUY bottled water?! Tsk Tsk.) That's where this app comes in to help you stay hydrated which will in turn help you feel better throughout the day.

#### User Personas 
- Easy! Everyone needs to be drinking more water. However, my target audience would be very busy people or travelers in need of water reminders and where to access free water in their area.

## MVP Feature Set

1.  Calculate daily water target based on weight and age. Toggle between ounces, cups, pints, liters.

2. User can track their daily intake.

3. Push notifications to get hourly reminders to drink water.

4. Progress Reports - showing daily amounts from last 7 days and last 31 days.

5. Find water near you! A map feature that shows all the public water fountations based on location. No excuses not to drink more water.


#### Technologies
- Ruby on Rails
- PostgreSQL Database
- React Native
- Javascript, JSX, CSS
- Expo SDK
- React Native Router Flux
- Axios (Promise based HTTP client for the browser and node.js)
- React Native Chart Kit
- NativeBase
- Apple Maps
- Firebase

#### Future Features & Ideas:
- User authentication with Firebase OAuth
- More customization of factors contributing to water goal amount (such as exercise amount, local temp, pregnancy/health, etc)
- Optimize for other screen sizes and Android
- Update based on user timezone
- Better push notification customization - user can choose start and end times and their own frequency
- More options beyond water fountains for finding free water sources


#### Trello Board
- https://trello.com/b/QKVN42Zz 

#### Capstone Guidelines:
https://github.com/Ada-Developers-Academy/daily-curriculum/blob/master/topic_resources/capstone/capstone.md


## To use this code: 

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

"dependencies": {
    "axios": "^0.18.0",
    "expo": "^27.0.1",
    "native-base": "^2.6.1",
    "react": "^16.3.1",
    "react-native": "~0.55.2",
    "react-native-chart-kit": "^1.1.5",
    "react-native-keyboard-aware-scroll-view": "^0.6.0",
    "react-native-progress-circle": "^2.0.0",
    "react-native-router-flux": "^4.0.0-beta.31",
    "react-native-svg": "^6.4.1",
    "react-native-svg-charts": "^5.2.0",
    "react-navigation": "^2.6.0"
  }
