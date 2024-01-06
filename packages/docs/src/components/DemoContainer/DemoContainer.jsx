import { Leva } from "leva";
import styles from "./DemoContainer.module.css";

const DemoContainer = ({ children }) => {
  return (
    <div className={styles.demoContainer}>
      {children}
      <div className={styles.demoControlsContainer}>
        <div>
          <Leva fill />
        </div>
      </div>
    </div>
  );
};

export default DemoContainer;
