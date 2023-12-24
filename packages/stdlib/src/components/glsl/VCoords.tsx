import { FC, forwardRef, PropsWithChildren } from "react";
import Input from "../sym/Input.tsx";

const VCoords = forwardRef<
  FC,
  PropsWithChildren<{
    id?: string;
  }>
>(({ id = "vCoords" }, ref) => {
  return <Input ref={ref} type={"vec2"} id={id} />;
});

export default VCoords;
