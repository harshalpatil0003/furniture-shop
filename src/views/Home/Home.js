import "./Home.css"
import { siteDetails, features } from '../../data/data'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/navbar/navbar"



function Home() {
    return (
        <div>
            <>
                <Navbar />
                <p className="site-description">{siteDetails.description}</p>
                {siteDetails.showFeatures ?
                    <div className='features'>
                        {
                            features.map((feature, i) => {
                                const { title, img } = feature

                                return (
                                    <FeatureCard key={i} title={title} img={img} />
                                )
                            })
                        }
                    </div>
                    : null}
                <Footer />

            </>
        </div>
    )
}

export default Home