import React from 'react'

const Navtop = (props) => {

    const change = () => {
        props.side(!props.sidebar)
    }

    return (
        <>
            <div className="navbar-default">
                <button className='btn fs-4' onClick={change}><i class="fa-solid fa-bars"></i></button>
               <i className="fa-solid fa-user fs-5" style={{marginLeft:'1150px'}}></i>
            </div>
        </>
    )
}

export default Navtop
