import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { bvec4, ivec4, uvec4, vec4 } from "@thi.ng/shader-ast";
import { Float } from "./Float.tsx";
import { Int } from "./Int.tsx";
import { Bool } from "./Bool.tsx";
import { VecTypeEnum } from "./Vec.tsx";
import getVectorValue from "../../utils/getVectorValue.ts";

type ItemType = Int | Float | Bool | ReactElement;

export type Vec4 = [ItemType, ItemType, ItemType, ItemType];

const VecFnMap = {
  [VecTypeEnum.vec]: vec4,
  [VecTypeEnum.uvec]: uvec4,
  [VecTypeEnum.ivec]: ivec4,
  [VecTypeEnum.bvec]: bvec4,
};

export default forwardRef<
  FC,
  PropsWithChildren<{
    type?: VecTypeEnum;
    x?: ItemType;
    y?: ItemType;
    z?: ItemType;
    w?: ItemType;
    value?: Vec4;
  }>
>(function Vec4({ x, y, z, w, value, type = VecTypeEnum.vec }) {
  return (
    <Base gen={VecFnMap[type]} args={value || getVectorValue(x, y, z, w)} />
  );
});
