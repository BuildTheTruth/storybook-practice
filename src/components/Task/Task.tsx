import { BellIcon } from '@chakra-ui/icons'
import { Box, Checkbox, Flex, IconButton, Input, VisuallyHidden } from '@chakra-ui/react'

export interface ITask {
  id: string
  title: string
  state: TaskState
}

export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'

interface Props {
  task: ITask
  onArchiveTask: (checked: boolean, id: string) => void
  onTogglePinTask: (state: TaskState, id: string) => void
  onEditTitle: (title: string, id: string) => void
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onTogglePinTask,
  onEditTitle
}: Props) => (
  <Flex
    as="li"
    _notLast={{
      borderBottom: '1px',
      borderColor: 'gray.200'
    }}
    h={12}
    bg="white"
    alignItems="center"
    _hover={{
      bgGradient: 'linear(to-b,  brand.100,  brand.50)'
    }}
    aria-label={title}
  >
    <Checkbox
      px={4}
      isChecked={state === 'TASK_ARCHIVED'}
      onChange={(e) => onArchiveTask(e.target.checked, id)}
    >
      <VisuallyHidden>Archive</VisuallyHidden>
    </Checkbox>
    <Box width="full" as="label">
      <VisuallyHidden>Edit</VisuallyHidden>
      <Input
        variant="unstyled"
        flex="1 1 auto"
        color={state === 'TASK_ARCHIVED' ? 'gray.400' : 'gray.700'}
        textDecoration={state === 'TASK_ARCHIVED' ? 'line-through' : 'none'}
        fontSize="md"
        fontWeight="bold"
        isTruncated
        value={title}
        onChange={(e) => onEditTitle(e.target.value, id)}
      />
    </Box>
    <IconButton
      p={5}
      flex="none"
      aria-label={state === 'TASK_PINNED' ? 'unpin' : 'pin'}
      variant={state === 'TASK_PINNED' ? 'unpin' : 'pin'}
      icon={<BellIcon />}
      onClick={() => onTogglePinTask(state, id)}
    />
  </Flex>
)

export default Task
