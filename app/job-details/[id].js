import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native-web'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn } from '../../components'
import { COLORS, SIZES, icons } from '../../constants'
import useFetch from '../../hook/useFetch'


const JobDetails = () => {
    const { id } = router.query;
    const router = useRouter();

    const {data , isLoading , error , refetch} = useFetch('job-details' , {
        job_id: id
    })

         
    return (
        <SafeAreaView style={{flex:1 , backgroundColor:COLORS.lightWhite}}>
            {/* <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite,
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft:()=>{
                    <ScreenHeaderBtn 
                    iconUrl={icons.left}
                    dimension="60%"
                    handlePress={()=> router.back()}
                    />
                }

                }
            }}
            >

            </Stack.Screen> */}
        </SafeAreaView>
    )
}

export default JobDetails