import {View, ScrollView, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';



const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerTitle:"DevJobs",
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu}
                            dimension="60%"
                            onPress={() => console.log('Nearby Jobs')}/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={images.profile}
                            dimension="100%"
                            onPress={() => console.log('Nearby Jobs')}/>
                    ),
                }}
            />
            <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
                <View style={{flex: 1, padding: SIZES.padding}}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;