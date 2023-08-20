import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Whoops!</h1>
      <h3>404 Page Not Found</h3>
      <img
        src="https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png"
        width="40%"
      />
      <h1>Looks like this page went on vacation.</h1>
      <h4>
        Try our{" "}
        <span
          style={{ fontFamily: "inherit", color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          homepage{" "}
        </span>
        instead
      </h4>
    </div>
  );
}

export default PageNotFound;
