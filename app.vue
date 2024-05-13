<script setup lang="ts">
import '@unocss/reset/tailwind.css'

useHead({
  htmlAttrs: { lang: 'en' },
  bodyAttrs: { class: 'font-default' },
  link: [{ rel: 'icon', href: '/northbase.png' }],
})

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  title: 'Unshade',
  description:
    'Unshade',
  ogImage: '/social-image.png',
  twitterImage: '/social-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div p4>
    <Button>
      Click to Open
    </Button>

    <Alert mt>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  </div>
</template>
