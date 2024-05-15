'use client'
import { useState, useEffect } from 'react';

export default function useThemeSwitch() {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const storageKey = "theme";

    const toggleTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        window.localStorage.setItem(storageKey, theme);
    };

    const getUserPreference = () => {
        if (typeof window !== 'undefined') {
            const userPref = window.localStorage.getItem(storageKey);
            if (userPref) {
                return userPref;
            }
            return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
        }
        return "light"; // Default to light if window is not defined
    };

    const [mode, setMode] = useState("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const handleChange = () => {
            const newMode = getUserPreference();
            setMode(newMode);
            toggleTheme(newMode);
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        if (isMounted) {
            toggleTheme(mode);
        }
    }, [mode, isMounted]);

    return [mode, setMode];
}