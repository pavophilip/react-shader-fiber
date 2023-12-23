import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { bvec2, ivec2, uvec2, vec2 } from "@thi.ng/shader-ast";
import { Float } from "./Float.tsx";
import { Int } from "./Int.tsx";
import { Bool } from "./Bool.tsx";
import { VecTypeEnum } from "./Vec.tsx";
import getVectorValue from "../../utils/getVectorValue.ts";

type ItemType = Int | Float | Bool | ReactElement;

export type Vec2 = [ItemType, ItemType];

const VecFnMap = {
  [VecTypeEnum.vec]: vec2,
  [VecTypeEnum.uvec]: uvec2,
  [VecTypeEnum.ivec]: ivec2,
  [VecTypeEnum.bvec]: bvec2,
};

export default forwardRef<
  FC,
  PropsWithChildren<{
    type: VecTypeEnum;
    x?: ItemType;
    y?: ItemType;
    value?: Vec2;
  }>
>(function Vec2({ x, y, value, type = VecTypeEnum.vec }) {
  return <Base gen={VecFnMap[type]} args={value || getVectorValue(x, y)} />;
});
