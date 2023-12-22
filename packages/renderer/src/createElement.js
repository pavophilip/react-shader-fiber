import elements from './elements';

export default function createElement(elementType, props) {
    const Element = elements[elementType];
    if (!Element) throw new Error(`unknown element of type '${elementType}'`);
    return new Element(props);
}