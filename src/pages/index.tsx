import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default () => {
    return (
        <div>
            <Layout>
                <Header text="This is a heading" subtext="The is the sub heading"></Header>
                <p>This is layout of home page</p>
                <h1>Hello Sabeen Baby</h1>
                <h1>Hello Gugu</h1>
            </Layout>
        </div>
    );
}