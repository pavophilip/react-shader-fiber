# Functions

## Define main function

```jsx
<Main>
  <Assign to={<Output type={"vec4"} id={"fragColor"} />}>
    <Vec4 x={0} y={0} z={1} w={1} />
  </Assign>
</Main>
```

## Call custom function

```jsx
// Arguments should be provided as children
<Call fn={"circle"} type={"float"}>
    <Float value={0.5} />
<Call/>
```

## **Trigonometry**

```jsx
<Acos of={0.5} />

<Asin of={0.5} />

<Atan of={0.5} />

<Cos of={0.5} />

<Sin of={0.5} />

<Tan of={0.8} />

```

## ****Mathematical Functions****

```jsx
<Abs a={-0.5} />

<Ceil value={0.5} />

<Floor a={0.5} />

<Fract of={0.5} />

<InverseSqrt a={0.5} />

<Log a={0.5} />

<Log2 a={0.5} />

<Max a={0.5} b={0.1} />

<Min a={0.5} b={0.1} />

<Pow a={0.5} b={0.6} />

<Sign a={0.5} />

<Sqrt a={0.9} />

```

## ****Vector and Geometric Functions****

```jsx
// Computes the cross product of two vectors.
<Cross a={<Vec3 x={0.5} />} b={<Vec3 x={0.1} />} />

// Calculates the distance between two points.
<Distance from={<Vec2 x={0.5} y={0.7} />} to={<Vec2 x={0.4} y={0.7} />} />

// Computes the dot product of two vectors.
<Dot a={<Vec2 x={0.5} y={0.7} />} b={<Vec2 x={0.4} y={0.7} />} />

// Computes the length of a vector.
<Length of={<Vec3 x={0.5} />} />

// Normalizes a vector.
<Normalize value={<Vec2 value={[0.1, 0.2]} />} />

```

## ****Interpolation and Range Functions****

```jsx
<Clamp x={0.5} min={0.1} max={0.4} />

<Mix a={0.5} b={0.1} c={0.2} />

<Mod a={0.5} b={0.1} />

<SmoothStep from={0.5} to={0.8} x={0.6} />

<Step edge={0.5} x={0.9} />
```

## Misc

```jsx
<Degrees radians={Math.PI / 2} />

<Radians degrees={<Float value={180} />} />
```