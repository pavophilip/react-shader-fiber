# Variables And Assignments

## Define Uniform

```jsx
<Uniform type={"float"} id={"u_time"} />
```

## Define Input

```jsx
<Input type={"vec2"} id={"vCoords"} />
```

## Define Output

```jsx
<Output type={"vec4"} id={"fragColor"} />
```

## Assign value

```jsx
<Assign to={<Output type={"vec4"} id={"fragColor"} />}>
  <Vec4 x={0} y={0} z={1} w={1} />
</Assign>
```

## Define variable

```jsx
<Sym id={"variable"} type={"float"}>
    <Float value={0.5} />
</Sym>
```