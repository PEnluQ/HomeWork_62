import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import ListHome from "../../components/ListHome/ListHome";
import js from './img/js.png';
import java from './img/java.png';
import python from './img/python.png';
import php from './img/php.png';
import cplus from './img/c++.png';

class Home extends Component {
    state = {
        programming : [
            {title:'JavaScript', time:1995, img: js},
            {title:'Java', time:1995, img: java},
            {title:'Python', time:1991, img:python},
            {title:'PHP', time:1995, img: php},
            {title:'C++', time:1983, img: cplus},
        ]
    };

    render() {
        return (
            <div className='Home'>
                <Navbar/>
                {this.state.programming.map((lang) => (
                    <ListHome
                        title={lang.title}
                        time={lang.time}
                        img={lang.img}
                    />
                ))}
            </div>
        );
    }
}

export default Home;