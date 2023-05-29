import "app/styles/index.scss";
import {  StoryFn } from "@storybook/react";
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const StyleDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
