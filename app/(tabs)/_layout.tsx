import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#2563eb' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'One Tab',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Second Tab',
                    tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="three"
                options={{
                    title: 'Third Tab',
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}
