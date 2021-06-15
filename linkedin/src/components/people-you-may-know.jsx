import React, { Component, } from 'react';

import { Card, Col, Button, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import DefaultProfile from "../assets/default_profile.jpeg"
import MiniProfileCard from "./profile-card"


class YouKnow extends Component {

    state = {
        imgDeft: "../assets/default_profile.jpeg",
        profileList: [],
        zeroFive: [],
        fiveTen: []
    }

    componentDidMount() {

        let profileArray
        let peopleKnowArray

        fetch('https://striveschool-api.herokuapp.com/api/profile/', {
            headers: {
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MTEwNjI5MTkzMDAwMTU2MGFiOTQiLCJpYXQiOjE2MjM2NTg3NTksImV4cCI6MTYyNDg2ODM1OX0.wSLELEDQ8EvVaUT7VwhhllP7b8dSxFmkatWvybYtSvI'
                }})
        .then((response) => response.json())
        .then(profileList => {
            console.log(profileList)

            profileArray = profileList

            console.log(profileArray)

            this.setState({ books: profileList })

            return profileArray
        })
        .then((profileArray) => {
            // const newArr = profileArray.slice()
            for (let i = profileArray.length - 1; i > 0; i--) {
                const rand = Math.floor(Math.random() * (i + 1));
                [profileArray[i], profileArray[rand]] = [profileArray[rand], profileArray[i]];
            }
            console.log(profileArray)

            peopleKnowArray = profileArray.slice(0,10)

            console.log(peopleKnowArray)

            let zeroFiveArr = peopleKnowArray.splice(0,5)
            console.log(zeroFiveArr)
            let fiveTenArr = peopleKnowArray.splice(5,10)

            this.setState({ zeroFive: zeroFiveArr })
            this.setState({ fiveTen: fiveTenArr })

            return peopleKnowArray

        })
        .catch((error) => {
            console.error('Error:', error);
          });
    }

    constructor(props) {
        super(props);
        this.state = {
            seeMore: false
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleMore = this.handleMore.bind(this);
      }

      handleMore() {
        this.setState(prevState => ({
            seeMore: !prevState.seeMore
          }));
      }



    render() {
        const showingMore = this.state.seeMore
        let cardDisplay 
        let footText
        let iconArrow

        console.log(this.state.zeroFive)

        
        

        this.state.seeMore === false ? (cardDisplay = "none") && (footText = "Show more") && (iconArrow = faChevronDown) : (cardDisplay = "flex") && (footText = "Show less") && (iconArrow = faChevronUp)

        // if seemore true map 12 if see more false map 6
      return (
        <Card fluid="true" style={{ width: '100%' }} className="d-flex px-0">
            <Card.Header style={{fontSize: '20px', fontWeight: 'bold' }} className="bg-white border-bottom-0 mt-3">
                <p className="mb-0 ms-2">People you may know</p>
            </Card.Header>
            <Card.Body className="ps-2">
            {this.state.zeroFive?.map((item, idx) => (
                <MiniProfileCard usertitle={item.title} username={item.name} usersurname={item.surname} useridx={idx} id={item._id} userimg={item.image}/>
            ))}              
            </Card.Body>
            <Card.Body style = {{ display: cardDisplay }}>
            {this.state.fiveTen?.map((item, idx) => (
                <MiniProfileCard usertitle={item.title} username={item.name} usersurname={item.surname} useridx={idx} id={item._id} userimg={item.image}/>
             ))}
            </Card.Body>

            <Card.Footer className="text-center align-items-center py-3" style={{fontSize: '18px', fontWeight: 'bold' }}>
                    <p className="d-inline-flex mb-0 px-2" onClick={this.handleMore}>{footText}</p>
                    <FontAwesomeIcon icon={iconArrow} className="d-inline-flex pt-1"/>
            </Card.Footer>
        </Card>

      )}
      }


export default YouKnow