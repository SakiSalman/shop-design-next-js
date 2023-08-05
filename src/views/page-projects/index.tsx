import React, { Fragment } from "react";
import ProjectBlocks from "./component/ProjectBlocks";
import HeadingV1 from "@/components/Heading/HeadingV1";
import RabbidHappy from "./component/RabbidHappy";

type Props = {};

const ProjectUI = (props: Props) => {
  return (
    <Fragment>
      {/* Top header */}
      <div className="pt-10">
        <HeadingV1 />
      </div>
      {/* block 1 */}
      <div className="border-b pt-5 pb-10 lg:py-16">
        <div className=" _container">
          <ProjectBlocks src="/images/project-block-1.png" />
        </div>
      </div>
      {/* block 2 */}
      <div className="border-b py-16">
        <div className=" _container">
          <ProjectBlocks imageRight src="/images/project-block-2.png" />
        </div>
      </div>
      {/* block 3 */}
      <div className="border-b py-16">
        <div className=" _container">
          <ProjectBlocks src="/images/project-block-3.png" />
        </div>
      </div>
      {/* rabbid happy section */}
      <RabbidHappy />
      {/* block 3 */}
      <div className="py-16">
        <div className=" _container">
          <ProjectBlocks imageRight src="/images/project-block-4.png" />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectUI;
