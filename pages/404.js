import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>
        Səhifə tapılmadı <Link href="/">Ana səhifəyə qayıt</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
