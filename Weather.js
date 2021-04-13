import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#00b4db', '#0083b0'],
        title: "Today is Clouds",
        subtitle: "There is no rain, but dark"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#4B79A1', '#283E51'],
        title: "Today is Thunderstorm!!",
        subtitle: "If you're not a warrior, don't go out"
    },
    Drizzle: {
        iconName: "weather-partly-lightning",
        gradient: ['#457fca', '#5691c8'],
        title: "Today is Drizzle",
        subtitle: "There is a little rain"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ['#1A2980', '#26D0CE'],
        title: "Today is Rain",
        subtitle: "you should take a umbrella"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ['#6DD5FA', '#2980B9'],
        title: "Today is snow~!",
        subtitle: "what a bout make some snowman?"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ['#FFFFFF', '#7F7FD5'],
        title: "Today's atmosphere is not good ",
        subtitle: "Just don't go outside"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#a8ff78', '#78ffd6'],
        title: "Today is fucking Clear!",
        subtitle: "Go out side!"
    }
}

export default function Weather({ temp, condition }) {

    return (

        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#4c669f' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    color="white"
                    name={weatherOptions[condition].iconName}
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 15
    },
    subtitle: {
        color: "white",
        fontWeight: "700",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});