# Readme

This is an experimental custom React Renderer, designed to compose Fragment Shaders using a declarative way.

## Why?

For fun, of course!

React Shader Fiber is designed to make shader programming easier and more fun. It combines the straightforward methods
of modern frontend frameworks like React with shader programming. This makes advanced visual effects and graphics
available to more developers.

### Advantages of Declarative Syntax

React's declarative syntax has revolutionized UI development, allowing developers to focus on *what* they want to
achieve, rather than *how* to do it. This approach simplifies coding, enhancing readability and maintainability. React
Shader Fiber extends these benefits to WebGL shaders, providing:

- **Improved Readability:** The declarative nature makes shader code more understandable, even for those not deeply
  versed in WebGL.
- **Rapid Prototyping:** Developers can quickly experiment with visual effects, seeing immediate results in a familiar
  framework.
- **Exploring:** React Shader Fiber's exciting feature is exploring new animation combinations. Users can blend
  animations for unique effects, promoting experimentation and creativity.

WebGL is a strong tool for high-quality graphics on the web, but it can be tough for beginners. React Shader Fiber makes
it easier, so more developers can use WebGL. Plus, you can reuse components made with React Shader Fiber and transform
them not only to GLSL but to WebGPU (Currently not supported, but work is in progress).

## Installation

`npm i @react-shader/fiber`

`npm i @react-shader/stdlib` — This library currently contains implementations of basic GLSL built-in functions,
operators, and expressions. These are provided by
the [shader-ast library](https://github.com/thi-ng/umbrella/tree/develop/packages/shader-ast#readme).

## Usage

```jsx
import {Assign, Input, Main, Output, Uniform, X, Vec4, Mix} from "@react-shader/stdlib";
import {FragmentShader} from "@react-shader/fiber";
import {useRef} from "react";

const MyComponent = () => {
    const color = <Output type={"vec4"} id={"fragColor"} ref={color}/>;
    const coords = <Input ref={coords} type={"vec2"} id={"vCoords"}/>;
    const time = <Uniform ref={time} id={"u_time"} type={"float"}/>;

    return (
        <FragmentShader width={600} height={600}>
            <Main>
                <Assign to={color}>
                    <Mix
                        a={<Vec4 x={1} y={0} z={0} w={1}/>}
                        b={<Vec4 x={0} y={1} z={0} w={1}/>}
                        c={<X of={coords}/>}
                    />
                </Assign>
            </Main>
        </FragmentShader>
    );
};
```

## Demos

See more demos [here](packages/demo)

## Features

- [x]  WebGL support
- [x]  Provide components as a props
- [x]  Built-in functions and expressions
- [x]  Call custom functions
- [ ]  WebGPU support