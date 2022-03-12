import { Box, Image, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { useSelector } from 'react-redux'
import { repoValue } from '../../_store/slices/repo'

const UserCard = () => {
  const navigate = useNavigate()
  const repoStoreValue = useSelector(repoValue)

  return (
    <Box
      w="200px"
      rounded="20px"
      overflow="hidden"
      mt={10}
      ml={10}
      border="1px"
      borderColor="#EDF2F7"
      className="user-card"
    >
      <Image
        src="https://avatars.githubusercontent.com/u/57936?v=4"
        alt="Card Image"
      />
      <Box p={5}>
        <Stack align="center">
          <Text as="h1" fontWeight="normal" my={2}>
            Example Name
          </Text>
          <Text
            fontWeight="light"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('stars')}
          >
            {repoStoreValue?.starredList?.length} starred repository
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default UserCard
