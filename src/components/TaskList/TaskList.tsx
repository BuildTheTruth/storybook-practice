import { CheckIcon, StarIcon } from '@chakra-ui/icons'
import { Flex, Skeleton, Spacer, VStack } from '@chakra-ui/react'
import Task, { ITask, TaskState } from 'components/Task/Task'
import EmptyTaskList from './EmtpyTaskList'

const LoadingTask = () => (
  <Flex
    _notLast={{
      borderBottom: '1px',
      borderColor: 'gray.200'
    }}
    bg="white"
    alignItems="center"
    h={12}
    p={4}
    aria-busy="true"
  >
    <Skeleton height={4} width={4} mr={4} />
    <Skeleton height={4} width={40} mr={2} />
    <Skeleton height={4} width={6} mr={2} />
    <Skeleton height={4} width={12} />
    <Spacer />
    <StarIcon aria-hidden="true" height={4} width={4} color="gray.200" />
  </Flex>
)

interface Props {
  tasks: ITask[]
  loading: boolean
  onArchiveTask: (checked: boolean, id: string) => void
  onTogglePinTask: (state: TaskState, id: string) => void
  onEditTitle: (title: string, id: string) => void
}

function TaskList({ loading, tasks, onTogglePinTask, onArchiveTask, onEditTitle }: Props) {
  const events = {
    onTogglePinTask,
    onArchiveTask,
    onEditTitle
  }

  if (loading) {
    return (
      <VStack align="stretch" spacing={0}>
        <LoadingTask />
        <LoadingTask />
        <LoadingTask />
      </VStack>
    )
  }

  if (tasks.length === 0) {
    return (
      <EmptyTaskList
        minHeight={72}
        Icon={CheckIcon}
        title="You have no tasks"
        subtitle="Sit back and relax"
      />
    )
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED')
  ]

  return (
    <VStack as="ul" align="stretch" spacing={0} aria-label="tasks">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </VStack>
  )
}

export default TaskList
