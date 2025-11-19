import { Stack, useSegments } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../../components/ProgressBar';

export default function SignupLayout() {
    const segments = useSegments();

    // Calculate current step based on the route name (e.g., "step1" -> 1)
    const currentRouteName = segments[segments.length - 1] || 'step1';
    const stepMatch = currentRouteName.match(/step(\d+)/);
    const currentStep = stepMatch ? parseInt(stepMatch[1], 10) : 1;

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView edges={['top']} className="bg-white">
                <View className="px-6 pt-4">
                    <ProgressBar currentStep={currentStep} totalSteps={6} />
                </View>
            </SafeAreaView>
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen name="step1" />
                <Stack.Screen name="step2" />
                <Stack.Screen name="step3" />
                <Stack.Screen name="step4" />
                <Stack.Screen name="step5" />
                <Stack.Screen name="step6" />
            </Stack>
        </View>
    );
}
