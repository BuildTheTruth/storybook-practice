import { ChakraProvider, theme } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import Task from '../Task/Task.stories'
import TaskList from './TaskList'

const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
  argTypes: {
    ...Task.argTypes
  },
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
    tasks: [
      { id: '1', state: 'TASK_INBOX', title: 'Build a date picker' },
      { id: '2', state: 'TASK_INBOX', title: 'QA dropdown' },
      {
        id: '3',
        state: 'TASK_INBOX',
        title: 'Write a schema for account avatar component'
      },
      { id: '4', state: 'TASK_INBOX', title: 'Export logo' },
      { id: '5', state: 'TASK_INBOX', title: 'Fix bug in input error state' },
      { id: '6', state: 'TASK_INBOX', title: 'Draft monthly blog to customers' }
    ]
  }
}

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      { id: '6', title: 'Draft monthly blog to customers', state: 'TASK_PINNED' },
      ...(Default.args?.tasks ?? []).slice(0, 5)
    ]
  }
}

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true
  }
}

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false
  }
}
