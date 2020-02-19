import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth/index';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { user } = isAuthenticated();

    const userLinks = () => {
        return (
            <div className='card'>
                <h4 className="card-header">User Links</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link className='nav-link' to='/cart'>My cart </Link>
                    </li>
                    <li className='list-group-item'>
                        <Link className='nav-link' to='/profile/update'>Update profile </Link>
                    </li>

                </ul>
            </div>
        )
    }

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">User information </h3>
                <ul className='list-group'>
                    <li className='list-group-item'>{user.name}</li>
                    <li className='list-group-item'>{user.email}</li>
                    <li className='list-group-item'>{user.role === 1 ? 'admin' : 'registered user'}</li>
                </ul>
            </div>
        )
    }

    const purchaseHistory = () => {
        return (
            <div className='card mb-5'>
                <h3 className="card-header">Purchase history </h3>
                <ul className='list-group'>
                    <li className='list-group-item'>history</li>
                </ul>
            </div>
        )
    }

    return (
        <Layout title="Dashboard" description={`Hello ${user.name}`} className='container-fluid' >
            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory()}
                </div>
            </div>
        </Layout>
    )
};

export default Dashboard;