import Layout from "../components/Layout/Layout";
import styles from "../styles/Person.module.css";
import Image from "next/image";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.API_ENDPOINT);
  const data = await res.json();
  const count = 0;
  return {
    props: {
      persons: data,
    },
  };
};

const splitEvery = (array, length) =>
  array.reduce((result, item, index) => {
    if (index % length === 0) result.push([]);
    result[Math.floor(index / length)].push(item);
    return result;
  }, []);

const Person = ({ persons }) => {
  return (
    <Layout title="SprintFWD - Person">
      <div className="mt-5 p-5 mb-5">
        <div className="">
          <h1 className="display-5 fw-bold mb-5">Person Page</h1>

          {persons?.length === 0 ? (
            <>Loading...</>
          ) : (
            <>
              {splitEvery(persons, 3).map((data, index) => (
                <div className="row" key={index}>
                  {data?.map((person, personIndex) => (
                    <div className="col-md-4" key={personIndex}>
                      <Link
                        href={`/persons/${person.id}`}
                        className={styles.personRoute}
                      >
                        <div
                          className={`card mb-3 ${styles.animate}`}
                          style={{ maxWidth: "524px" }}
                        >
                          <div className="row no-gutters">
                            <div className="col-md-4">
                              <Image
                                src={person.profileImg}
                                className={`card-img ${styles.personImg}`}
                                width={100}
                                height={100}
                                alt={person.firstname}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className={styles.cardTitle}>
                                  {person.firstname} {person.lastname}
                                </h5>

                                <p className="card-text">
                                  <small className="text-primary">
                                    View Person
                                  </small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Person;
