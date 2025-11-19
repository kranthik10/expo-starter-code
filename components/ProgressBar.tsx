import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const progress = useSharedValue(0);

    useEffect(() => {
        const targetProgress = (currentStep / totalSteps) * 100;
        progress.value = withSpring(targetProgress, {
            damping: 20,
            stiffness: 90,
        });
    }, [currentStep, totalSteps]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${progress.value}%`,
        };
    });

    return (
        <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <Animated.View
                className="h-full bg-blue-600 rounded-full"
                style={animatedStyle}
            />
        </View>
    );
}
