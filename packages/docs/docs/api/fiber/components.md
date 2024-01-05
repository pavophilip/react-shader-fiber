# Components

## Player

This component renders a composed shader on a WebGL canvas. The shader should be supplied as a child.

### `width`

Specify the width of the canvas in pixels.

*optional*

Default `300`

### `height`

Specify the canvas height in pixels.

*optional*

Default `300`

```jsx
<Player width={300} height={300}>
	<Shader>
		...
	</Shader>
</Player>
```

## Shader

This component is a wrapper for your entire shader. This wrapper automatically creates `fragColor`, `vCoords`
and `u_time` outputs/inputs and provides them through provider. You can access them from your components using hooks
useColor, useCoords, useTime.

### `prelude`

You can supply your GLSL code, which will be inserted at the beginning of the resulting shader (before the main
function).

You can pass it either as a string or as an array of strings.

*optional*

Default `“”`

```jsx
<Shader prelude={[]}>
	...
</Shader>
```

### Color

The Color component assists with creating colors. It accepts a hex property if you wish to specify a color using hex.
This component automatically converts the hex into normalized r, g, b values and creates a Vec4.

### `hex`

Specify the hex value of the color. This is required if the r, g, b values are not provided.

*optional*

### `r`

*optional*

### `g`

*optional*

### `b`

*optional*

### `a`

Specify opacity in range 0-1. Defaults to 1.0

*optional*

```jsx
<Color hex={"#f7ff17"} />

<Color hex={"#f7ff17"} a={0.5}/> // 50% opacity

<Color r={1} g={0.1} b={0.5} /> // You can specify r, g, b values as well
```