# Hooks

## `useColor`

This hook returns a `vec4` node of the input color for current shader context. You can use this value to set the result
color of your shader.

```jsx
const color = useColor();

<Assign to={color}>
	<Color hex="#ff0000"/>
</Assign>
```

## `useCoords`

This hook provides the `vCoords` input for the shader, which you can use to receive the current pixel coordinates.

```jsx
const coords = useCoords();

<Assign to={color}>
	<Vec4 x={<Y of={coords}/> } y={0.5} z={0.5} w={1}/>
</Assign>
```

## `useTime`

This hook returns a uniform `u_time` node. You can use this to animate your shader.

```jsx
const time = useTime();

<Assign to={color}>
	<Vec4 x={<Sin of={time}/> } y={0.5} z={0.5} w={1}/>
</Assign>
```