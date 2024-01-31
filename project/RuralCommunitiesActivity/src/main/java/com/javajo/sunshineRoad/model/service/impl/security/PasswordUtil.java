package com.javajo.sunshineRoad.model.service.impl.security;

import java.util.Random;

public class PasswordUtil {
    public static String generateRandomPassword() {
        int index = 0;
        char[] chars = new char[] {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

        StringBuffer password = new StringBuffer();
        Random random = new Random();

        for (int i = 0; i < 8; i++) {
            double rd = random.nextDouble();
            index = (int)(chars.length * rd);

            password.append(chars[index]);
        }

        return password.toString();
    }
}