
import Logo from '../public/homey.svg';
import Burger from '../public/bars-solid.svg';

export default function Banner({ title }) {


    return (
        <div className='banner'>

            <Logo />

            <div className='vert-divider' />

            <h2>{ title || 'Tabin Time' }</h2>


            <div className='button' >
                <Burger />
            </div>

            <style jsx>{`
                .banner {
                    height: 4rem;
                    display: flex;
                    border-bottom: 1px solid green;
                    padding: 0.2rem;
                }

                .vert-divider {
                    width: 2px;
                    height: 70%;
                    margin: auto 0.5rem;
                    background: black;
                }

                div.button {
                    width: 2rem;
                    height: 2em;
                    margin: auto;
                    margin-right: 1rem;
                    cursor: pointer;
                }


            `}</style>
        </div>
    )
}