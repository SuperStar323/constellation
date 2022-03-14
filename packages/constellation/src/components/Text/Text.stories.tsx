import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { colors } from '../../colors'
import Text from '.'
import { TextComponentProps } from './types'

const meta = {
  argTypes: {
    as: {
      description: 'The rendering element of the component.',
    },
    children: {
      description: 'The text to display.',
    },
    color: {
      description: 'The color of the text.',
      options: Object.keys(colors),
      type: 'select',
    },
    variant: {
      description: 'The display variant of the component.',
    },
  },
  component: Text,
  title: 'Components/Text',
} as unknown as ComponentMeta<typeof Text>

const Default: ComponentStory<typeof Text> = (args) => <Text {...args}>{args.children}</Text>

Default.args = { children: 'The quick brown fox jumps over the lazy dog 0123456789' }

const AllVariants: ComponentStory<typeof Text> = (args: TextComponentProps) => {
  const variants: TextComponentProps['variant'][] = [
    'display',
    'title-1',
    'title-2',
    'title-3',
    'subheading',
    'body-mono',
    'body-1',
    'body-2',
    'paragraph-mono',
    'paragraph-1',
    'paragraph-2',
    'caption-1',
    'caption-2',
    'overline',
    'micro',
  ]

  return (
    <div style={{ padding: '20px 40px' }}>
      {variants.map((variant, i) => (
        <>
          <div
            key={i}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '20px',
            }}
          >
            <Text {...args} variant={variant}>
              The quick brown fox jumps over the lazy dog 0123456789
            </Text>
            <Text>{variant}</Text>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}

AllVariants.parameters = {
  controls: { exclude: 'variant' },
}

export { AllVariants, Default }

export default meta
