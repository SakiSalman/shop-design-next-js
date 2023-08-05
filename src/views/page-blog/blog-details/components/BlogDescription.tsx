import React from 'react'
import ScheduleCard from './ScheduleCard'
import CannabisBox from './CannabisBox'

type Props = {}

const BlogDescription = (props: Props) => {
    return (
        <div className='py-4 text-gray65'>
            <p className='mb-2 text-base leading-relaxed'>After years of professional wrestling, basketball, acting and more, Kevin Nash is officially starting his next endeavor in the cannabis industry by launching his very own strain with HYMAN Cannabis. Nash made the first official announcement at the GCW Notorious show, as mentioned on E Wrestling News and Wrestling Headlines back in January. Nash continues to discuss his excitement and involvement with this campaign on his podcast, KLIQ This.</p>

            <p className='mb-2 text-base leading-relaxed'>Kevin Nash will be making appearances at local Michigan dispensaries to meet fans and sign autographs for the launch of Jackknife, his signature strain for his signature move. The two-day signing tour includes the following Michigan marijuana dispensary locations:</p>
            <div className='my-10'>
                <ScheduleCard />
            </div>
            <p className='my-5 text-base leading-relaxed'>
                WithNaturally, Nash chose to name his signature strain after his signature move, Jackknife. Having undergone a rigorous process of pheno hunting with HYMAN cultivators, he opted for the strain crossing of Creamsicle (a favorite amongst stoners) with Soñando (one of HYMAN’s marquee genetics) to craft a legendary strain for a legendary pioneer in wrestling.
            </p>
            <p className='mb-5 text-base leading-relaxed'>“I’m familiar with cannabis, and the one thing I look for when I’m consuming marijuana is quality. HYMAN cultivators have achieved a level of quality that is like nothing else I’ve tried. The clarity, potency, and their entire internal process is why I chose them – everything HYMAN does is by design,” Kevin Nash explained.</p>
            <p className='mb-5 text-base leading-relaxed'>
                Aside from wrestling, Nash also played D1 college basketball for the Tennessee Volunteers. After three years playing with The Vols, he was inspired to join the Army after watching the movie Stripes. When he was honorably discharged from the Army, this led him to go back into basketball and play for various professional European basketball teams where a career-ending catastrophic knee injury – concluding his professional athletic career.
            </p>
            <p className='mb-5 text-base leading-relaxed'>
                Nash also went into acting and is known for his involvement in Teenage Mutant Ninja Turtles, Magic Mike, Cameo in John Wick, Rock of Ages, Longest Yard and 2nd Punisher. Primarily posed as a comedic actor, he is proudest of his character portrayal as Officer Englehart in The Longest Yard. While already achieving so much in his lifetime, Nash has expressed his excitement to add cannabis in his carousel of involvements.
            </p>
            <p className='mb-5 text-base leading-relaxed'>The Jackknife strain drops in Michigan on Friday, September 2nd and will be available in a 3.5G Pre-Pack (Eighth) and 1G Handcraft (Glass Tip Joint) in dispensaries included below.</p>

           <div>
            <CannabisBox/>
           </div>
        </div>
    )
}

export default BlogDescription