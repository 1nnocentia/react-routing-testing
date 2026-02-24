import React from "react"
import { TouchableOpacity, Text, TouchableOpacityProps, ButtonProps } from "react-native"
import buttonStyles from '@/styles/buttonStyles'
import { useRouter } from 'expo-router'

interface BackButtonProps {
  label?: string
}

export default function BackButton({ 
    label = "Back"}: BackButtonProps) {
    const router = useRouter();

    return (
        <TouchableOpacity style={[buttonStyles.button]}
        accessibilityRole="button"
        onPress={() => router.back()}
        >
        <Text style={buttonStyles.buttonText}>{label}</Text>
    </TouchableOpacity>
    )
}