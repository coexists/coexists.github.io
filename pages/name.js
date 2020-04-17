import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.css';

class PokeName extends React.Component {
    getName(){
        let pokeName = document.querySelector("#pokeName");
  
        fetch("/api/pokemon/name/" + pokeName.value).then((res)=>{return res.json();}).then((processed)=>{
            
            let resultElement = document.querySelector("#reportingArea");
  
            if(processed.error){
                resultElement.innerHTML = "No Pokemon by that name.";
            } else{
                resultElement.innerHTML = processed.name + " is your pokemon.";
            }
        });
    }

    render(){
        return(
            <div className={styles.body}>
            <div>
                <Head>
                        <title>Pokemon Name Search</title>
                    </Head>
                    </div>
                    <div className={styles.list}>
                        <h1 className={styles.h1}>Pokemon Name Search</h1>
                            <div>
                            <Link href = "/index">
                                    <a className={styles.a}>Home</a>
                                </Link>
                                <br />
                                <Link href = "/id">
                                    <a className={styles.a}>ID</a>
                                </Link>
                                <br />
                                <Link href = "/type">
                                    <a className={styles.a}>Type</a>
                                </Link>
                            </div>
                            

                <p className={styles.p}>Search for Pokemon by Name</p>
                <input type="text" id="pokeName"/>
                <button onClick = {() => {this.getName()}}>Search</button>
                <div className={styles.reporting} id="reportingArea"></div>
            </div>
            </div>
        )
    }
}

export default PokeName;