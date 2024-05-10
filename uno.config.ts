import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      fyc: 'flex items-center',
      fxc: 'flex justify-center',
    },
    [/^size-(.*)$/, ([, c]) => `w-${c} h-${c}`],
  ],
  rules: [],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        mono: 'DM Mono:300,400',
        sans: 'Inter:300,400,500,600,700',
        default: [
          { name: 'Pally', weights: ['400', '500', '600', '700'] },
          { name: 'sans-serif', provider: 'none' },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
