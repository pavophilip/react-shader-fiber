import Output from "./Output.tsx";
import { FC, forwardRef, PropsWithChildren } from "react";

const FragColor = forwardRef<
  FC,
  PropsWithChildren<{
    id?: string;
  }>
>(({ id = "fragColor" }, ref) => {
  return <Output ref={ref} type={"vec4"} id={id} />;
});

export default FragColor;
