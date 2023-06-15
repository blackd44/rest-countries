import { FC } from "react";

type Props = {
  children: JSX.Element;
};

const Accordion: FC<Props> = ({ children }) => {
  return <div className="country">{children}</div>;
};

export default Accordion;
