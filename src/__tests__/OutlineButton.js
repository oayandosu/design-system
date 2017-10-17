import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { OutlineButton, theme } from '..'

describe('OutlineButton', () => {
  test('renders', () => {
    const json = renderer.create(<OutlineButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<OutlineButton disabled theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', 'transparent')
    expect(json).toHaveStyleRule('border-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })
})
