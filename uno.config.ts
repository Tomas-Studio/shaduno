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
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

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
          { name: 'Pally', weights: ['300', '400', '500', '600', '700'] },
          { name: 'sans-serif', provider: 'none' },
        ],
      },
    }),
    presetAnimations(),
    presetShadcn({ color: 'blue' }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  // content: {
  //   pipeline: {
  //     include: [
  //       // the default
  //       /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
  //       // include js/ts files
  //       "./**/*.{js,ts}",
  //     ],
  //   },
  // },
  include: [/\.ts/, /\.vue$/, /\.vue\?vue/],
})
