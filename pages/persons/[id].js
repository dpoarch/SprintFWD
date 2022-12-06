import React, { use } from 'react';
import Layout from '../../components/Layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticPaths = async () => {
    const res = await fetch(process.env.API_ENDPOINT);
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`${process.env.API_ENDPOINT}/${id}`);
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

const Details = ({ users }) => {
    return (
        <Layout title={`SprintFWD - Person Details`}>
            {users.length === 0 ? (<h1>No Users Found</h1>) : (
                <div className="mt-5 p-5 mb-5 bg-light rounded-3">
                <div className="">
                    <Image className="rounded-circle" src={users.profileImg} width={200} height={200} alt={users.firstname} />
                    <h1 className="display-5 fw-bold">{users.firstname} {users.lastname}</h1>
                    <div className="mt-5">
                        <div className="card-body">
                            <h5 className="card-title">Personal Information</h5>
                            
                        </div>
                        <div className="row mt-5">
                            <div className='col-md-4'></div>
                            <div className='col-md-4'>
                                <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>Current Job : </strong>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="card-text text-primary">{users.jobType}</p>
                                        </div>
                                    </div>
                                    
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <strong>Gender : </strong>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="card-text">{users.gender}</p>
                                        </div>
                                    </div>
                                    
                                </li>
                                <li className="list-group-item">
                                <div className="row">
                                        <div className="col-md-6">
                                            <strong>Address : </strong>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="card-text">{users.address}, {users.postal}</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                <div className="row">
                                        <div className="col-md-6">
                                            <strong>Country : </strong>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="card-text">{users.country}</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                <div className="row">
                                        <div className="col-md-6">
                                            <strong>Contact : </strong>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="card-text">{users.phone}</p>
                                        </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            <div className='col-md-4'></div>
                        </div>
                        
                        <div className="card-body mt-5">
                            <Link href="/person" className="card-link mx-5">Back</Link>
                            <Link href={`tel:${users.phone}`} className="card-link">Contact Person</Link>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
        </Layout>
    );
};

export default Details;