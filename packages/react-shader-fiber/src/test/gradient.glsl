vec4 gradient(vec4 colorA, vec4 colorB, float x){
    return mix(colorA, colorB, x);
}