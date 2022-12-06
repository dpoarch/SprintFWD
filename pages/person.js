import Layout from '../components/Layout/Layout';
import styles from '../styles/Person.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const getServerSideProps = async () => {

    const res = await fetch(process.env.API_ENDPOINT);
    const data = await res.json();
    const count = 0;
    return {
        props: {
            users: data
        }
    }
}

const splitEvery = (array, length) =>
  array.reduce((result, item, index) => {
    if (index % length === 0) result.push([]);
    result[Math.floor(index / length)].push(item);
    return result;
  }, []);

 const Person = ({ users }) => {

    return (
        <Layout title="SprintFWD - Person">
            <div className="mt-5 p-5 mb-5">
                <div className="">
                    <h1 className="display-5 fw-bold mb-5">Person Page</h1>

                    {users?.length === 0 ? (
                        <>
                            Loading...
                        </>
                    ) : (
                        <>
                            {splitEvery(users, 3).map((user, index) => (
                                <div className="row" key={index}>
                                     {user?.map((eachUser, userIndex) => (
                                        <div className="col-md-4" key={userIndex}>
                                            <Link href={`/persons/${eachUser.id}`} className={styles.personRoute}>
                                            <div className={`card mb-3 ${styles.animate}`} style={{ maxWidth: '524px' }}>
                                                <div className="row no-gutters">
                                                    <div className="col-md-4">
                                                        <Image src={eachUser.profileImg} className={`card-img ${styles.personImg}`} width={100} height={100} alt={eachUser.firstname} />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className={styles.cardTitle}>{eachUser.firstname} {eachUser.lastname}</h5>

                                                            <p className="card-text"><small className="text-primary">View Person</small></p>
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
}

export default Person;