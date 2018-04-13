import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 4px;
  width: 40px;
  height: 40px;
  background: #e55226;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 20px;

  :hover {
    background: #fb6d42;
  }
`

const DivBorder = styled.div`
  background: rgba(255, 255, 255, 0.4);
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

export default props => (
  <DivBorder>
    <Button {...props} />
  </DivBorder>
)
