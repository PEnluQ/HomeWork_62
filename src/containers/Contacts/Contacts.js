import React, {Component} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import MyInfo from "../../components/MyInfo/MyInfo";

class Contacts extends Component {
    state = {
      info: [
          {git:'https://github.com/PEnluQ', name:'Profile'},
          {git:'https://github.com/PEnluQ/HomeWork51', name:'First my react-app'},
          {git:'https://github.com/PEnluQ/homeWork_53', name:'Task to do list'},
          {git:'https://github.com/PEnluQ/lab_60_Beksultan_Kadyrbekov_Kutman_Sulaimanov', name:'Work with other'}
      ]
    };
    render() {
        return (
            <div>
                <Navbar/>
                {this.state.info.map((info) => (
                    <MyInfo
                        github={info.git}
                        project={info.name}
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;