import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../shared/BlogCard";
// import { BASE_URL } from "../utils/config";

const Blogs = () => {


  return (
    <div>
      <CommonSection title={"All blogs"} />
      <section className="mt-4">
        
      </section>
      <Newsletter />
    </div>
  );
};

export default Blogs;