import Province from "./Province";

const Provinces = ({ loading, error, data }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        data.map((province) => {
          return (
            <Province
              key={province.name}
              name={province.name}
              capital={province.capital}
              flagUrl={province.flagUrl}
            />
          );
        })
      )}
    </div>
  );
};

export default Provinces;
