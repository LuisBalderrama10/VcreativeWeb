import React from "react";
import "../../styles/Courses.css";
import Banner1 from "../../assets/BANNER_1.png";
import Banner2 from "../../assets/BANNER_2.png";
import { useNavigate } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "La creación de contenido como negocio",
      description: "Curso intensivo de manera Virtual",
      image: Banner2,
      level: "Virtual",
      page: "/curso-virtual",
      checkout: "/checkout-virtual",
    },
    {
      title: "La creación de contenido como negocio",
      description: "Curso intensivo de manera Presencial",
      image: Banner1,
      level: "Presencial",
      page: "/curso-presencial",
      checkout: "/checkout-presencial",
    },
  ];

  return (
    <section className="courses">
      <div className="courses-header">
        <h1>Cursos VCreative</h1>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>

            <div className="course-content">
              <span className="course-level">{course.level}</span>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <div className="course-footer">
                
            
                <button onClick={() => navigate(course.page)}>
                  Ver curso
                </button>

                
                <button onClick={() => navigate(course.checkout)}>
                  Inscribirme
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};