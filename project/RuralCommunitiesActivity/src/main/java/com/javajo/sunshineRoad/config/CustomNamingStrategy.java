package com.javajo.sunshineRoad.config;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;

public class CustomNamingStrategy extends PropertyNamingStrategies.NamingBase {
    @Override
    public String translate(String propertyName) {
        if (propertyName == null || propertyName.isEmpty()) {
            return propertyName;
        }

        char firstChar = propertyName.charAt(0);
        char lowerChar = Character.toLowerCase(firstChar);

        if (firstChar == lowerChar) {
            return propertyName;
        }

        StringBuilder strBuilder = new StringBuilder(propertyName);
        strBuilder.setCharAt(0, lowerChar);
        return strBuilder.toString();
    }
}