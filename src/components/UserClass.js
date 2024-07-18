// import React from "react"
// class UserClass extends React.Component{
//     constructor(props){
//         super(props)
//         console.log(props)
//         this.state = {
//             count:0,
//             count2:1,
//         }
//     }
//     render(){
//         const {name,location} = this.props;
//         return <div className="userClass">
//             <h1>{this.state.count}</h1>
//             <button onClick={() => this.setState({count:this.state.count+1})}>+</button>
//             <h2>{this.state.count2}</h2>
//             <button onClick={()=>this.setState({count2:this.state.count2+1})}>+</button>
//             <h2>{name}</h2>
//             <h4>{location}</h4>
//         </div>
//     }
// }

// export default UserClass;




import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
           userInfo:{
            name:"",
            location:"",
            avatar_url:"https://imgs.search.brave.com/N4zOfwCPDlCpldc4u_l6rgLc8cdvQhRQkO1oGPgLoI0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waWNr/ZXJ3aGVlbC5jb20v/c3RhdGljLzJmZjk5/MWYxYmNmZTJjOWYz/MjlkMDE4ZGM3MTRk/ZWJlL2E0ZDg4L2lt/YWdlLWNlcnQucG5n"
           }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ravib31")
        const res = await data.json()
        console.log(res)
        this.setState({userInfo:res})
    }
    render(){
        // const {name,location} = this.props;
        const {name,location,avatar_url} = this.state.userInfo;
        return <div className="userClass">
           
            <img src={avatar_url} alt="avatar" width="100px" height="100"/>
            <h2>Name :{name}</h2>
            <h4>Location :{location}</h4>
        </div>
    }
}

export default UserClass;