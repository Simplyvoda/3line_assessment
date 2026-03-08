interface PageHeaderProps {
  pageTitle: string;
  pageDesc?: string;
}

const PageHeader = ({ pageTitle, pageDesc  }: PageHeaderProps) => {
  return (
    <>
      <h1 className="text-gray-900 text-2xl md:text-3xl">{pageTitle}</h1>
      <p className="text-gray-500 font-light text-md my-2">
        {pageDesc ? pageDesc : `Manage ${pageTitle.toLowerCase()} content here`}
      </p>
    </>
  );
};

export default PageHeader;
