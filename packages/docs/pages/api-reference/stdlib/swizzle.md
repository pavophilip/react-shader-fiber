# Swizzle

```jsx
<X of={<Vec2 x={0.2} y={0.1} />} /> // vec2(0.2, 0.1).x

<Y of={<Vec2 x={0.2} y={0.1} />} /> // vec2(0.2, 0.1).y

<Z of={<Vec3 x={0.2} y={0.1} z={0.5} />} /> // vec3(0.2, 0.1, 0.5).z

<W of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} /> // vec4(0.2, 0.1, 1.0, 1.0).w

<XY of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} /> // vec4(0.2, 0.1, 1.0, 1.0).xy

<XYZ of={<Vec4 x={0.2} y={0.1} z={0.5} w={1.0} />} /> // vec4(0.2, 0.1, 1.0, 1.0).xyz
```