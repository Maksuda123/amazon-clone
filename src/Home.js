import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className="home">
          <img className='home_image' src="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612165745/Fuji_TallHero_45M_v2_1x._CB432458380__kgis6r.jpg" alt=""/>

          <div className="home_row">
          <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg">
                </Product>
                <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg"></Product>
          
          </div>

          <div className="home_row">
          <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg">
                </Product>
                <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg"></Product>
           <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg"></Product>
          
          </div>


          <div className="home_row">
          <Product
            id="1234566"
            title="The Lean Starting"
            price={12.34}
            rating={5}
            image="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612173182/DURM-298100765322FDNF._V533340780__wi3w0o.jpg">
                </Product>
          </div>



          

         
        </div>
    )
}

export default Home
