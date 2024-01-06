# Readme

This is an experimental custom React Renderer, designed to compose Fragment Shaders using a declarative way.

> [!WARNING]
> Just a heads-up: our library is like a fun, evolving playground – it's under active development and can be unstable.
> Happy creating and thanks for being part of our journey!

> [!TIP]
> Spot something odd? Let us know by [creating an issue](https://github.com/pavophilip/react-shader-fiber/issues/new)!
>
> Got cool ideas or fixes? We'd love to see
> your [pull requests](https://github.com/pavophilip/react-shader-fiber/pulls). Join us in shaping this library!

## Why?

For fun, of course!

React Shader Fiber is designed to make shader programming easier and more fun. It combines the straightforward methods
of modern frontend frameworks like React with shader programming. This makes advanced visual effects and graphics
available to more developers.

See [Documentation and examples](https://pavophilip.github.io/react-shader-fiber)

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

## Features

- [x]  WebGL support
- [x]  Provide components as a props
- [x]  Built-in functions and expressions
- [x]  Call custom functions
- [ ]  WebGPU support