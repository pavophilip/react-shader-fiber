# @react-shader/renderer

```jsx
import {render} from "@react-shader/renderer";

const ast = render(
    <Add>
        <Float value={0.5}/>
        <Float value={0.2}/>
    </Add>
);
```

Contents of `ast` variable:

```jsx
[
    {
        tag: 'op2',
        type: 'float',
        info: undefined,
        op: '+',
        l: {tag: 'lit', type: 'float', info: undefined, val: 0.5},
        r: {tag: 'lit', type: 'float', info: undefined, val: 0.2}
    }
]
```