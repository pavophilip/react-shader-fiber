# Readme

This is an experimental custom React Renderer, designed to compose Fragment Shaders using a declarative way.

## Why?

For fun, of course!

React Shader Fiber is designed to make shader programming easier and more fun. It combines the straightforward methods
of modern frontend frameworks like React with shader programming. This makes advanced visual effects and graphics
available to more developers.

## Installation

```bash
npm i @react-shader/fiber
```

Or with yarn:

```bash
yarn add @react-shader/fiber
```

## Usage

Simple Hello World Shader

```jsx
import {Color, Player, Shader} from "@react-shader/fiber";

const HelloWorld = () => {
  return (
      // You can specify size of your canvas
      <Player width={300} height={300}>
          <Shader>
              {/* Child of Shader component (color) will be assigned to the result */}
              <Color hex={"#ff0000"}/>
          </Shader>
      </Player>
  );
};

export default HelloWorld;
```

## Demos

See more demos [here](packages/demo)

## Features

- [x]  WebGL support
- [x]  Provide components as a props
- [x]  Built-in functions and expressions
- [x]  Call custom functions
- [ ]  WebGPU support