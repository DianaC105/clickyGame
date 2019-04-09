import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked:[],
    score:0,
    highscore:0
    
  };

  shuffleFriend = ()=>{
    const friends = this.state.friends;
    for (let i= 0; i<friends.length; i++){
    const j = Math.floor(Math.random() * (i + 1));
    const temp =friends[i];
    friends[i]=friends[j];
    friends[j]= temp;
    ;
    }
   
    this.setState({ friends});
    // console.log("YAAAAAASSSS");
  };

  clickedFriend = (id)=>{
    const clicked = this.state.clicked;
    let score= this.state.score;
     if (clicked.includes(id))
    { alert ("You lost")}
     else {clicked.push(id)
    score++}
    this.setState({ clicked, score });

   
    };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar currentScore = {this.state.score}
                topScore= {this.state.topScore}/>
        <Title>Clicky Game </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clicked = {this.clickedFriend}
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
