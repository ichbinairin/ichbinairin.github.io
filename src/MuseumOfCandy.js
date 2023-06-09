import React from 'react';
import './MuseumOfCandy.css';
import pic1 from './imgs/hand2.png';
import pic2 from './imgs/milk.png';
import pic3 from './imgs/gumball.png';
import pic4 from './imgs/sprinkles.png';
import lollyicon from './imgs/lolli_icon.png'
import 'bootstrap/dist/css/bootstrap.css';

const MuseumOfCandy = () => {
    return (
        <div>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div id='headingGroup' className='text-white text-center d-none d-lg-block mt-5'>
                            <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                            <h1 className="">MUSEUM<span>/</span>OF<span>/</span>CANDY</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={pic1} alt="Hand holding candy" />
                    </div>
                </div>
            </section>

            {/*Content*/}
            <section className="container-fluid px-0">
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <img className="img-fluid" src={pic2} alt='milk jar' />

                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lollyicon} alt="lolly icon" className='d-none d-lg-inline' />
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                                        beatae, maiores deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                                        repellat eveniet quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                                        autem nam ex deserunt debitis
                                        eaque ratione! Nobis, quidem assumenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 text-center">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lollyicon} alt="lolly icon" className='d-none d-lg-inline' />
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                                        beatae, maiores deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                                        repellat eveniet quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                                        autem nam ex deserunt debitis
                                        eaque ratione! Nobis, quidem assumenda.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={pic3} alt="gumball machine" />
                    </div>
                </div>
                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src={pic4} alt="sprinkles" className="img-fluid" />
                    </div>
                    <div className="col-md-6 text-center order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>MUSEUM OF CANDY</h2>
                                <img src={lollyicon} alt="lolly icon" className='d-none d-lg-inline' />
                                <p className='lead' >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, iste molestiae
                                        beatae, maiores
                                        deserunt
                                        in voluptatibus
                                        aspernatur architecto excepturi delectus soluta? Ipsa, deleniti dolorem hic consequatur
                                        repellat eveniet
                                        quidem
                                        voluptate necessitatibus dolorum delectus minus vitae, ut, veritatis sint ipsum magnam
                                        autem nam ex deserunt
                                        debitis
                                        eaque ratione! Nobis, quidem assumenda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default MuseumOfCandy;