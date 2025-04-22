import React from "react";

const AnimatedButton = ({ label = "Learn More" }) => {
  return (
    <button
      className="button"
      style={{
        "--clr": "#930000",
        lineHeight: 1,
        textDecoration: "none",
        display: "inline-flex",
        border: "none",
        cursor: "pointer",
        alignItems: "center",
        gap: "0.75rem",
        backgroundColor: "var(--clr)",
        color: "#fff",
        borderRadius: "10rem",
        fontWeight: 600,
        padding: "0.75rem 1.5rem",
        paddingLeft: "20px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#000";
        const iconWrapper = e.currentTarget.querySelector(".button__icon-wrapper");
        const firstIcon = e.currentTarget.querySelector(".button__icon-svg");
        const copyIcon = e.currentTarget.querySelector(".button__icon-svg--copy");
        if (iconWrapper) iconWrapper.style.color = "#000";
        if (firstIcon)
          firstIcon.style.transform = "translate(150%, -150%)";
        if (copyIcon)
          copyIcon.style.transform = "translate(0)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "var(--clr)";
        const iconWrapper = e.currentTarget.querySelector(".button__icon-wrapper");
        const firstIcon = e.currentTarget.querySelector(".button__icon-svg");
        const copyIcon = e.currentTarget.querySelector(".button__icon-svg--copy");
        if (iconWrapper) iconWrapper.style.color = "var(--clr)";
        if (firstIcon)
          firstIcon.style.transform = "translate(-150%, 150%)";
        if (copyIcon)
          copyIcon.style.transform = "translate(-150%, 150%)";
      }}
    >
      <span
        className="button__icon-wrapper"
        style={{
          flexShrink: 0,
          width: "25px",
          height: "25px",
          position: "relative",
          color: "var(--clr)",
          backgroundColor: "#fff",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg"
          width="10"
          style={{
            position: "absolute",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg button__icon-svg--copy"
          width="10"
          style={{
            position: "absolute",
            transform: "translate(-150%, 150%)",
            transition: "transform 0.3s ease-in-out 0.1s",
          }}
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      {label}
    </button>
  );
};

export default AnimatedButton;
