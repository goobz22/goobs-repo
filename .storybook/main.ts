import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      /**
       * Tell Storybook we’re using the Next.js App Router
       */
      appDirectory: true,
      /**
       * If your Next config is a .ts file in the root,
       * you can specify it explicitly. 
       * Otherwise, '@storybook/nextjs' should pick it up automatically.
       *
       * nextConfigPath: path.resolve(__dirname, '../next.config.ts'),
       */
    },
  },
  /**
   * Optionally enable autodocs if you want to use Storybook's new docs features:
   */
  docs: {
    autodocs: true,
  },
}

export default config
