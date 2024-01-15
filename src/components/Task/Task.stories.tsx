import { ChakraProvider, theme } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import Task from './Task'

const meta: Meta<typeof Task> = {
  title: 'Components/Task',
  component: Task,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Buy milk',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned: Story = {
  args: {
    task: {
      id: '2',
      title: 'QA dropdown',
      state: 'TASK_PINNED'
    }
  }
}

export const Archived: Story = {
  args: {
    task: {
      id: '3',
      title: 'Write schema for account menu',
      state: 'TASK_ARCHIVED'
    }
  }
}
