import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className || ""}`}>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-gray-600 max-w-5xl mx-auto">{description}</p>
      )}
    </div>
  );
}

export default PageHeader;
