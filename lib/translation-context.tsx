"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./translations/en.json";
import ru from "./translations/ru.json";
import uz from "./translations/uz.json";

type Language = "en" | "ru" | "uz";
type Theme = "light" | "dark" | "system";

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (path: string) => string;
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

const translations = { en, ru, uz };

const TranslationContext = createContext<TranslationContextType | undefined>(
    undefined,
);

export function TranslationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguageState] = useState<Language>("en");
    const [theme, setThemeState] = useState<Theme>("system");
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Load saved language
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage && ["en", "ru", "uz"].includes(savedLanguage)) {
            setLanguageState(savedLanguage as Language);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
            setThemeState(savedTheme);
        } else {
            setThemeState("system");
        }
    }, []);

    // Handle theme changes
    useEffect(() => {
        let actualTheme = theme;
        if (theme === "system") {
            actualTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";
        }

        const isDarkTheme = actualTheme === "dark";
        setIsDark(isDarkTheme);

        if (isDarkTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const t = (path: string): string => {
        const keys = path.split(".");
        let value: any = translations[language];

        for (const key of keys) {
            if (value && typeof value === "object" && key in value) {
                value = value[key];
            } else {
                return path;
            }
        }

        return typeof value === "string" ? value : path;
    };

    return (
        <TranslationContext.Provider
            value={{ language, setLanguage, t, theme, setTheme, isDark }}
        >
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error(
            "useTranslation must be used within TranslationProvider",
        );
    }
    return context;
}
