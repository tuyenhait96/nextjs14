import { CourseGrid } from "@/src/components/common";
import CourseItem from "@/src/components/course/CourseItem";
import Heading from "@/src/components/typography/Heading";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
       <CourseItem></CourseItem>
       <CourseItem></CourseItem>
       <CourseItem></CourseItem>
      </CourseGrid>
    </div>
  );
};

export default page;
