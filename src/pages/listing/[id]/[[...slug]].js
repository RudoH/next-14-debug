// Return a test string as a prop from getServersideProps
export async function getServerSideProps() {
  // set caching headers to avoid caching in the browser
  context.res.setHeader("Cache-Control", "no-store");

  return {
    props: {
      mlsNumber: "1234566",
    },
  };
}

const Test = ({ mlsNumber }) => {
  return <div>TEST#: {mlsNumber}</div>;
};

export default Test;
