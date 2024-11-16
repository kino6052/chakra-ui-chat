import {
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { TAppProps, TMessageProps } from './types';

const Message = ({ text, actor }: TMessageProps) => {
  return (
    <Flex
      p={4}
      bg={actor === 'user' ? 'blue.500' : 'gray.100'}
      color={actor === 'user' ? 'white' : 'gray.600'}
      borderRadius="lg"
      w="fit-content"
      alignSelf={actor === 'user' ? 'flex-end' : 'flex-start'}
    >
      <Text>{text}</Text>
    </Flex>
  );
};

export const Chat: React.FC<TAppProps> = ({
  inputProps,
  messagesProps,
  buttonProps
}) => {
  return (
    <Flex h="100vh" py={12}>
      <Flex
        flexDirection="column"
        w="2xl"
        m="auto"
        h="full"
        borderWidth="1px"
        roundedTop="lg"
      >
        <HStack p={4} bg="blue.500">
          <Heading size="lg" color="white">
            Chat App
          </Heading>
        </HStack>

        <Stack
          px={4}
          py={8}
          overflow="auto"
          flex={1}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#d5e3f7',
              borderRadius: '24px',
            },
          }}
        >
          <Message actor='user' text='Hello' />
        </Stack>

        <HStack p={4} bg="gray.100">
          <Input bg="white" placeholder="Enter your text" />
          <Button colorScheme="blue">Send</Button>
        </HStack>
      </Flex>
    </Flex>
  );
}

