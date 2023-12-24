import Base from "../glsl/Base.tsx";
import { FC, forwardRef, PropsWithChildren, ReactElement } from "react";
import { bvec3, ivec3, uvec3, vec3 } from "@thi.ng/shader-ast";
import { Float } from "./Float.tsx";
import { Int } from "./Int.tsx";
import { Bool } from "./Bool.tsx";
import { VecTypeEnum } from "./Vec.tsx";
import getVectorValue from "../../utils/getVectorValue.ts";

type ItemType = Int | Float | Bool | ReactElement;

export type Vec3 = [ItemType, ItemType, ItemType];

const VecFnMap = {
  [VecTypeEnum.vec]: vec3,
  [VecTypeEnum.uvec]: uvec3,
  [VecTypeEnum.ivec]: ivec3,
  [VecTypeEnum.bvec]: bvec3,
};

export default forwardRef<
  FC,
  PropsWithChildren<{
    type?: VecTypeEnum;
    x?: ItemType;
    y?: ItemType;
    z?: ItemType;
    value?: Vec3;
  }>
>(function Vec3({ x, y, z, value, type = VecTypeEnum.vec }, ref) {
  return (
    <Base
      ref={ref}
      gen={VecFnMap[type]}
      args={value || getVectorValue(x, y, z)}
    />
  );
});
