import { Flex, FlexProps, Text } from '@chakra-ui/react'
import { ElementType } from 'react'

interface Props extends FlexProps {
  Icon: ElementType
  title: string
  subtitle: string
}

const EmptyTaskList = ({ Icon, title, subtitle, ...rest }: Props) => (
  <Flex bg="white" flexDirection="column" alignItems="center" justifyContent="center" {...rest}>
    <Text py={1}>
      <Icon color="brand.300" fontSize="5xl" />
    </Text>
    <Text color="gray.600" fontWeight="extrabold" fontSize="md" lineHeight={6}>
      {title}
    </Text>
    <Text color="gray.600" fontSize="sm" lineHeight={5}>
      {subtitle}
    </Text>
  </Flex>
)

export default EmptyTaskList
