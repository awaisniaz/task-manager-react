import React from 'react'
import Header from '../Header'
import Sidebar from '../sidebar'
function Home(props: any) {
    return (
        <>
            <Header />
            <div>
                <Sidebar />
            </div>
        </>
    )
}

Home.propTypes = {

}

export default Home

