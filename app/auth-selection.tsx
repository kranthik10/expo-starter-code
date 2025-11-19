import { Href, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthSelectionScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-white items-center justify-center px-6">
            <View className="w-full max-w-sm space-y-6">
                <Text className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Join the Community
                </Text>

                <TouchableOpacity
                    onPress={() => router.push('/(tabs)' as Href)}
                    className="bg-blue-600 w-full py-4 rounded-xl shadow-md active:bg-blue-700"
                >
                    <Text className="text-white text-center text-lg font-semibold">
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/signup/step1' as Href)}
                    className="bg-white border-2 border-blue-600 w-full py-4 rounded-xl active:bg-gray-50"
                >
                    <Text className="text-blue-600 text-center text-lg font-semibold">
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
