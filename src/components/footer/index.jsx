import React from 'react'
import footerImg from '../../assets/DWEL®.svg'

const Footer = () => {
    return (
        <div>
            <div className='container'>
                <div className='flex justify-between py-25'>
                    <div>
                        <div>
                            <img src={footerImg} alt="" />
                        </div>
                        <p>Powered by Webflow.</p>
                    </div>
                    <div className='flex justify-between gap-[200px]'>
                        <div>
                            <p>Password</p>
                            <p>404</p>
                        </div>
                        <div>
                            <p>Licenses</p>
                            <p>Style Guide</p>
                            <p>Changelog</p>
                        </div>
                        <div>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
