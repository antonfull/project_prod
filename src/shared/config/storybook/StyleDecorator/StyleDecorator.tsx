import 'app/styles/index.scss'
import {Story, StoryFn} from '@storybook/react'

 export const StyleDecorator = (story: () => StoryFn) => story()
