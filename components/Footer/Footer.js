import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-5">
            <div className="col-md-4 d-flex align-items-center">
                <Link href={'/'} className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    Logo
                </Link>
                <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><Link className="text-muted" href={'/'}>Home</Link></li>
                <li className="ms-3"><Link className="text-muted" href={'/person'}>Person</Link></li>
                <li className="ms-3"><Link className="text-muted" href={'/about'}>About</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;