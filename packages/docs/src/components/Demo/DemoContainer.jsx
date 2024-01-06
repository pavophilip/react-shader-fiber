import { Leva } from "leva";

const DemoContainer = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
      }}
    >
      {children}
      <div
        style={{
          padding: "0 32px",
        }}
      >
        <Leva fill />
      </div>
    </div>
  );
};

export default DemoContainer;
