import { Stack } from "expo-router";
import { useEffect } from "react";
import * as QuickActions from "expo-quick-actions";


export default function Layout () {
    useEffect(() => {
        QuickActions.setItems([
            {
           title:"Add a plant",
           icon:"symbol:leaf",
           id:"0"
        }
    ])
        
    }, [])
    return(
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown:false, animation:"fade"}}/>
            <Stack.Screen name="onboarding" options={{headerShown:false, animation:"fade"}}/>
            <Stack.Screen name="news" options={{presentation:"modal", title:"New plant"}}/>
        </Stack>
    )
}