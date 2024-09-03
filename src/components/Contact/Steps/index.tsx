import { useFormState } from "../FormContext";
import Stream from "./Stream";
import StudentInfo from "./StudentInfo";
import Subjects from "./Subjects";
import { motion } from "framer-motion";
export { default as Stream } from "./Stream";
export { default as StudentInfo } from "./StudentInfo";
export { default as Subjects } from "./Subjects";

interface IProps {
  component: React.ReactElement;
  delta: number;
  key: string;
}
const AnimatedFormComponent = ({ component, delta }: IProps) => (
  <motion.div
    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {component}
  </motion.div>
);

export const ActiveStepFormComponent = () => {
  const { step, previousStep } = useFormState();
  const delta = step - previousStep;

  switch (step) {
    case 1:
      return (
        <AnimatedFormComponent
          component={<Stream />}
          delta={delta}
          key={"step-1"}
        />
      );
    case 2:
      return (
        <AnimatedFormComponent
          component={<Subjects />}
          delta={delta}
          key={"step-2"}
        />
      );
    case 3:
      return (
        <AnimatedFormComponent
          component={<StudentInfo />}
          delta={delta}
          key={"step-3"}
        />
      );
    default:
      return null;
  }
};
