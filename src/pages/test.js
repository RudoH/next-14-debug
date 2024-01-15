// Return a test string as a prop from getServersideProps
export async function getServerSideProps() {
  return {
    props: {
      test: "1234566",
    },
  };
}

const Test = ({ test }) => {
  return <div>TEST#: {test}</div>;
};

export default Test;
