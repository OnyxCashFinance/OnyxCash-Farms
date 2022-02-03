import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledContracts = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const Contracts = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledContracts>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(6262, 'Contacts')}
        </Heading>
        <>
          <Text fontSize="14px">{TranslateString(6231, 'Token: 0x72f7386a1d63485f97c2a9ec0a262ad375e44566')}</Text>
          <Text fontSize="14px">{TranslateString(6722, 'MasterChef: 0x80CdeCB1Eb1A9C79Dd0fB050E53FFB6a6302918B')}</Text>
        </>
      </CardBody>
    </StyledContracts>
  )
}

export default Contracts
