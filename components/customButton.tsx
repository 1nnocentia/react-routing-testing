import React from "react"
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import buttonStyles from '@/styles/buttonStyles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function CustomButton({ 
    title,
    style,
     ...props }: ButtonProps) {
        return (
            <TouchableOpacity style={[buttonStyles.button, style]}
            accessibilityRole="button"
            {...props}
            >
            <Text style={buttonStyles.buttonText}>{title}</Text>
        </TouchableOpacity>
        )
}