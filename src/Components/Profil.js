import React from 'react'

class Profil extends React.Component{
    constructor(props){
        super(props);
        this.state={ show : false };
        this.state={
            name: "Aubrey MBOLO",
            bio: "Aime l'informatique",
            job: "Etudiant",
        }
    }
    
    render(){
        return<div>
            <button className="" onClick={ () => this.setState({ show:true})}>Cliquez-là</button>
            {
                this.state.show?
                    <div className="d1">
                        <h1>{this.state.name}</h1>
                        <h1>{this.state.bio}</h1>
                        <img src="https://cdn.pixabay.com/photo/2016/08/29/11/22/legs-1627988_960_720.jpg"></img>
                        <h1>{this.state.job}</h1>
                    </div>
                :null
            }
            
        </div>;
    }
}
export default Profil