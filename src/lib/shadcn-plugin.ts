import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  function ({ addBase, theme }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 47.4% 11.2%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 47.4% 11.2%",
        "--border": "300 4% 89%",
        "--input": "214.3 31.8% 91.4%",
        "--primary": "222.2 47.4% 11.2%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--accent": "294, 5.5%, 95.3%",
        "--accent-foreground": "10, 50.0%, 13.5%",
        "--destructive": "10, 78.0%, 54.0%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "17 50% 70%",
        "--radius": "0.5rem",

        //* Tomato: light
        "--tomato1": "10, 100%, 99.4%",
        "--tomato2": "8, 100%, 98.4%",
        "--tomato3": "8, 100%, 96.6%",
        "--tomato4": "8, 100%, 94.3%",
        "--tomato5": "8, 92.8%, 91.0%",
        "--tomato6": "9, 84.7%, 86.3%",
        "--tomato7": "10, 77.3%, 79.5%",
        "--tomato8": "10, 71.6%, 71.0%",
        "--tomato9": "10, 78.0%, 54.0%",
        "--tomato10": "10, 71.4%, 49.4%",
        "--tomato11": "10, 82.0%, 42.0%",
        "--tomato12": "10, 82.0%, 42.0%",

        //* Mauve: light
        "--mauve1": "300, 20%, 99%",
        "--mauve2": "300, 7.7%, 97.5%",
        "--mauve3": "294, 5.5%, 95.3%",
        "--mauve4": "289, 4.7%, 93.3%",
        "--mauve5": "283, 4.4%, 91.3%",
        "--mauve6": "278, 4.1%, 89.1%",
        "--mauve7": "271, 3.9%, 86.3%",
        "--mauve8": "255, 3.7%, 78.8%",
        "--mauve9": "252, 4.0%, 57.3%",
        "--mauve10": "253, 3.5%, 53.5%",
        "--mauve11": "252, 4.0%, 44.8%",
        "--mauve12": "260, 25.0%, 11.0%",
      },
      ".dark": {
        "--background": "224 71% 4%",
        "--foreground": "213 31% 91%",
        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",
        "--popover": "224 71% 4%",
        "--popover-foreground": "215 20.2% 65.1%",
        "--card": "224 71% 4%",
        "--card-foreground": "213 31% 91%",
        "--border": "300 4% 69%",
        "--input": "216 34% 17%",
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 1.2%",
        "--secondary": "222.2 47.4% 11.2%",
        "--secondary-foreground": "210 40% 98%",
        "--accent": "0.03 78% 74%",
        "--accent-foreground": "300, 20%, 99%",
        "--destructive": "10, 78.0%, 54.0%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "17 60% 50%",
        "--radius": "0.5rem",

        //* Tomato: dark
        "--tomato1": "10, 23.0%, 9.4%",
        "--tomato2": "10, 39.0%, 11.6%",
        "--tomato3": "9, 48.3%, 15.5%",
        "--tomato4": "9, 53.0%, 18.1%",
        "--tomato5": "9, 57.0%, 20.7%",
        "--tomato6": "9, 61.8%, 24.5%",
        "--tomato7": "9, 68.4%, 31.1%",
        "--tomato8": "10, 80.4%, 43.9%",
        "--tomato9": "10, 78.0%, 54.0%",
        "--tomato10": "10, 88.4%, 64.1%",
        "--tomato11": "10, 100%, 72.0%",
        "--tomato12": "10, 85.0%, 89.0%",

        //* Mauve: dark
        "--mauve1": "246, 6.0%, 9.0%",
        "--mauve2": "240, 5.1%, 11.6%",
        "--mauve3": "241, 5.0%, 14.3%",
        "--mauve4": "242, 4.9%, 16.5%",
        "--mauve5": "243, 4.9%, 18.8%",
        "--mauve6": "244, 4.9%, 21.5%",
        "--mauve7": "245, 4.9%, 25.4%",
        "--mauve8": "247, 4.8%, 32.5%",
        "--mauve9": "252, 4.0%, 45.2%",
        "--mauve10": "247, 3.4%, 50.7%",
        "--mauve11": "253, 4.0%, 63.7%",
        "--mauve12": "256, 6.0%, 93.2%",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    });
  },
  {
    darkMode: ["class"],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        boxShadow: {
          "extend-y-top": "0 -4px 6px -1px rgba(0, 0, 0, 0.1),0 -2px 4px -1px rgba(0, 0, 0, 0.04)",
        },
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          tomato1: "hsl(var(--tomato1))",
          tomato2: "hsl(var(--tomato2))",
          tomato3: "hsl(var(--tomato3))",
          tomato4: "hsl(var(--tomato4))",
          tomato5: "hsl(var(--tomato5))",
          tomato6: "hsl(var(--tomato6))",
          tomato7: "hsl(var(--tomato7))",
          tomato8: "hsl(var(--tomato8))",
          tomato9: "hsl(var(--tomato9))",
          tomato10: "hsl(var(--tomato10))",
          tomato11: "hsl(var(--tomato11))",
          tomato12: "hsl(var(--tomato12))",
          mauve1: "hsl(var(--mauve1))",
          mauve2: "hsl(var(--mauve2))",
          mauve3: "hsl(var(--mauve3))",
          mauve4: "hsl(var(--mauve4))",
          mauve5: "hsl(var(--mauve5))",
          mauve6: "hsl(var(--mauve6))",
          mauve7: "hsl(var(--mauve7))",
          mauve8: "hsl(var(--mauve8))",
          mauve9: "hsl(var(--mauve9))",
          mauve10: "hsl(var(--mauve10))",
          mauve11: "hsl(var(--mauve11))",
          mauve12: "hsl(var(--mauve12))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontSize: {
          "extend-ss": "0.625rem",
        },
        height: {
          "extend-22": "5.5rem",
        },
      },
    },
    plugins: [],
  }
);
