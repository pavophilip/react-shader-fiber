# Literals

## Primitive types

```jsx
<Bool value={false} />

<Float value={0.1} />

<Int value={1} />

<Uint value={1} />
```

## Vectors

```jsx
// Vec2
<Vec2 x={<Float value={0.5}/>} />
<Vec2 x={0.5}/>
<Vec2 x={0} y={0.5}/>
<Vec2 value={[0.5]}/> 
<Vec2 value={[0, 0.5]}/>

// Vec3
<Vec3 x={0} y={0.5} z={0.5}/>
<Vec3 value={[0, 0.5, 0.5]}/>

// Vec4
<Vec4 value={[0, 0.5, 0.5, 1.0]}/>
```