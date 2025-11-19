import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-6">
      <View className="items-center space-y-4">
        <Text className="text-4xl font-bold text-gray-900 text-center">
          Welcome to AppFlow
        </Text>
        <Text className="text-lg text-gray-500 text-center mb-8">
          The best place to start your journey.
        </Text>

        <Link href="/auth-selection" asChild>
          <TouchableOpacity className="bg-blue-600 px-8 py-4 rounded-full shadow-lg active:bg-blue-700">
            <Text className="text-white text-lg font-semibold">Let me in</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
