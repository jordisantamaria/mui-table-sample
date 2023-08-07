import { Container, css } from '@mui/system'
import Head from 'next/head'
import Nav from './Nav'

type Props = {
  children: any
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Next Mui Sample</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://app.embed.im/snow.js" defer></script>
      </Head>
      <Container
        css={css`
          margin-top: 24px;
        `}
      >
        {children}
      </Container>
    </>
  )
}

