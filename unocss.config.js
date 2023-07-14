import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetTheme from 'unocss-preset-theme'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-#C9D4F1 text-black cursor-pointer hover:bg-#7296F9 hover:text-#fff disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  theme: {
    // 預設樣式
    colors: {
      'primary': '#ECF1FF',
      'primary-border': '#1677ff',
      'text': 'rgba(0, 0, 0, 0.88)',
      'text-s': '#2C3E50',
      'container': '#F7F6F4',
      'border': '#0000ff',
      'link': '#000026',
      'link-hover': '#2198D3',
    },
    spacing: {
      xss: '4px',
      xs: '8px',
      sm: '12px',
      base: '16px',
      lg: '24px',
      xl: '32px',
    },
  },
  presets: [
    presetUno(),
    // presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
    presetTheme({
      theme: {
        // 修改主題
        darkTheme: {
          colors: {
            'primary': '#1c1c1c',
            'primary-border': '#1c1c1c',
            'border': '#1f3042',
            'container': '#676767',
            'text': '#ffffff',
            'text-s': '#e0e0e0',
          },
        },
        lightTheme: {
          colors: {
            'primary': '#CBF6FF',
            'primary-border': '#CBF6FF',
            'border': '#1f3042',
            'container': '#C2FACF',
            'text': '#000D70',
            'text-s': '#007F0C',
          },
        },
        brownTheme: {
          colors: {
            'primary': '#E5E3DD',
            'primary-border': '#E5E3DD',
            'border': '#1f3042',
            'container': '#533F42',
            'text': '#BE9499',
            'text-s': '#AB8C8D',
          },
        },
        compact: {
          spacing: {
            xss: '2px',
            xs: '4px',
            sm: '6px',
            base: '8px',
            lg: '12px',
            xl: '16px',
          },
        },
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
