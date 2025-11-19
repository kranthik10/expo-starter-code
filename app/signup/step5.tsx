import { Href, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SignupStep5() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white px-6">
            <View className="flex-1 justify-center items-center">
                <Text className="text-2xl font-bold text-gray-900 mb-4">Step 5: Security</Text>
                <Text className="text-gray-500 text-center mb-8">
                    Set up a secure password.
                </Text>
            </View>

            <View className="pb-8">
                <TouchableOpacity
                    onPress={() => router.push('/signup/step6' as Href)}
                    className="bg-blue-600 w-full py-4 rounded-xl shadow-md active:bg-blue-700"
                >
                    <Text className="text-white text-center text-lg font-semibold">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
