// Return a test string as a prop from getServersideProps
export async function getServerSideProps() {
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
