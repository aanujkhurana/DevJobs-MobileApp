import {View, ScrollView, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import {NearbyJobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';



const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerTitle:"",
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu}
                            dimensions="60%"
                            onPress={() => console.log('Nearby Jobs')}/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.profile}
                            dimensions="100%"
                            onPress={() => console.log('Nearby Jobs')}/>
                    ),
                }}
            />
        </SafeAreaView>
    );
}

export default Home;