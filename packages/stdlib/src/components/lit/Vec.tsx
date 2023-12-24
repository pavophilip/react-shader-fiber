import { Vec2 } from "./Vec2.tsx";
import { Vec3 } from "./Vec3.tsx";
import { Vec4 } from "./Vec4.tsx";

export enum VecTypeEnum {
  vec = "vec",
  ivec = "ivec",
  uvec = "uvec",
  bvec = "bvec",
}

export type Vec = Vec2 | Vec3 | Vec4;
