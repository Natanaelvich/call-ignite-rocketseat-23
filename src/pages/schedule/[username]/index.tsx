
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, UserHeader } from './styles'
import { Avatar, Heading, Text } from '@natanaelvich-ignite-ui/react'

interface ScheduleProps {
  user: {
    name: string
    bio: string
    avatarUrl: string
  }
}

export default function Schedule({ user }: ScheduleProps) {
  return (
    <>

      <Container>
        <UserHeader>
          <Avatar src={user.avatarUrl} />
          <Heading>{user.name}</Heading>
          <Text>{user.bio}</Text>
        </UserHeader>

      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const username = String(params?.username)

//   const user = await prisma.user.findUnique({
//     where: {
//       username,
//     },
//   })

//   if (!user) {
//     return {
//       notFound: true,
//     }
//   }

  return {
    props: {
      user: {
        name: 'Natanael Vich',
        bio: 'Desenvolvedor Fullstack',
        avatarUrl: 'http://github.com/natanaelvich.png',
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
