export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--color-background) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                surfaceSoft: 'rgb(var(--color-surface-soft) / <alpha-value>)',
                border: 'rgb(var(--color-border) / <alpha-value>)',
                text: 'rgb(var(--color-text) / <alpha-value>)',
                textMuted: 'rgb(var(--color-text-muted) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                accentSoft: 'rgb(var(--color-accent-soft) / <alpha-value>)',
            },
            boxShadow: {
                glow: '0 24px 80px rgba(15, 23, 42, 0.12)',
            },
            fontFamily: {
                sans: ['"SF Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            backgroundImage: {
                mesh: 'radial-gradient(circle at top center, rgba(229, 231, 235, 0.85), transparent 22%), radial-gradient(circle at 85% 15%, rgba(241, 245, 249, 0.95), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.92))',
                'mesh-dark': 'radial-gradient(circle at top center, rgba(38, 38, 38, 0.45), transparent 24%), radial-gradient(circle at 85% 12%, rgba(24, 24, 27, 0.65), transparent 26%), linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(9, 9, 11, 0.96))',
            },
        },
    },
    plugins: [],
};
