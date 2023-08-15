import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import presetWebFonts from "@unocss/preset-web-fonts";
import presetTheme from "@minmin614/unocss-preset-theme";
// unocss.config.js
export default defineConfig({
  shortcuts: [
    // object style
    [
      "btn",
      "px-4 py-1 rounded inline-block bg-#C9D4F1 text-black cursor-pointer hover:bg-#7296F9 hover:text-#fff disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50",
    ],
    [
      "icon-btn",
      "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600",
    ],
    // dynamic shortcuts
    [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ],
  rules: [
    // margin ex: mg-10 mg-20.5
    [/^mg-([\d.]+)$/, ([, d]) => ({ margin: `${d}px` })],
    // padding
    [/^pd-([\d.]+)$/, (match) => ({ padding: `${match[1]}px` })],
    // 文字大小 ex: fs-24.5
    [/^fs-([\d.]+)$/, ([, size]) => ({ "font-size": `${size}px` })],
    // 文字陰影
    [
      /^txt-shadow-(\d+)-(\d+)-(\d+)-([\w#]+)$/,
      ([, x, y, blur, color]) => ({
        "text-shadow": `${x}px ${y}px ${blur}px ${color}`,
      }),
    ],
  ],
  theme: {
    // 預設樣式
    colors: {
      primary: "#ECF1FF",
      "primary-border": "#1677ff",
      text: "rgba(0, 0, 0, 0.88)",
      "text-copy": "#2C3E50",
      container: "#F7F6F4",
      border: "#0000ff",
      link: "#000026",
      "link-hover": "#2198D3",
      mask: "#000",
      secondary: {
        a: "#00ff1e",
        b: "#006eff",
        c: "#ff0027",
      },
      urlbg: "url(https://octodex.github.com/images/daftpunktocat-guy.gif)",
    },
    spacing: {
      xss: "4px",
      xs: "8px",
      sm: "12px",
      base: "16px",
      lg: "24px",
      xl: "32px",
    },
    breakpoints: {
      ss: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1800px',
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTheme({
      theme: {
        // 其他樣式
        themeDark: {
          colors: {
            primary: "#1c1c1c",
            "primary-border": "#1c1c1c",
            border: "#1f3042",
            container: "#676767",
            text: "#ffffff",
            "text-copy": "#e0e0e0",
            mask: "#4f4f4f",
            secondary: {
              a: "#006eff",
              b: "#ff0027",
              c: "#00ff1e",
            },
            urlbg: "url(https://octodex.github.com/images/homercat.png)",
          },
        },
        themeLight: {
          colors: {
            primary: "#FFF8D7",
            "primary-border": "#FFF8D7",
            border: "#1f3042",
            container: "#FFDAC8",
            text: "#000D70",
            "text-copy": "#007F0C",
            mask: "#63604f",
            secondary: {
              a: "#ff0027",
              b: "#00ff1e",
              c: "#006eff",
            },
            urlbg: "url(https://octodex.github.com/images/pusheencat.png)",
          },
        },
        themeBrown: {
          colors: {
            primary: "#E5E3DD",
            "primary-border": "#E5E3DD",
            border: "#1f3042",
            container: "#533F42",
            text: "#BE9499",
            "text-copy": "#AB8C8D",
            mask: "#70565a",
            urlbg: "url(https://octodex.github.com/images/adventure-cat.png)",
          },
        },
        themeTest: {
          colors: {
            primary: "#0080FF",
            "primary-border": "#0080FF",
            border: "#003060",
            container: "#0066CC",
            text: "#66B3FF",
            "text-copy": "#66B3FF",
            mask: "#D2E9FF",
            urlbg: "url(https://octodex.github.com/images/nyantocat.gif)",
          },
        },
        compact: {
          spacing: {
            xss: "2px",
            xs: "4px",
            sm: "6px",
            base: "8px",
            lg: "12px",
            xl: "16px",
          },
        },
      },
    }),
    presetAttributify({
      /* preset options */
    }),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        // these will extend the default theme
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
        // 客製化字體
        lobster: "Lobster",
        aguafina: "Aguafina Script",
        lato: [
          {
            name: "Lato",
            weights: ["400", "700"],
            italic: true,
          },
          {
            name: "sans-serif",
            provider: "none",
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left".split(" "),
});
