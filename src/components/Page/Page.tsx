import React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'
import TopBar from '../TopBar'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <TopBar />
    <StyledMain>
      {children}
    </StyledMain>
    {<Footer />}
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${props => props.theme.topBarSize * 2}px);
  padding-bottom: ${props => props.theme.spacing[5]}px;
`

export default Page