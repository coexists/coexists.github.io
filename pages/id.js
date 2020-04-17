import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from './styles.module.css';

class PokeId extends React.Component {

    getId(){
        let pokeId = document.querySelector("#pokeId");
  
        fetch("/api/pokemon/id/" + pokeId.value).then((res)=>{return res.json();}).then((processed)=> {
            
            let resultElement = document.querySelector("#reportingArea");
  
            if(processed.error){
                resultElement.innerHTML = "No Pokemon exists with that ID";
            } else{
                resultElement.innerHTML = "Pokemon name is " + processed.name + ", ID # is " + processed.id;
  
            }
        });
    }
    render(){
        return(
            <div className={styles.body}>
            <div>
                <Head>
                        <title>Id Search</title>
                    </Head>
                    </div>
                    <div className={styles.list}>
                        <h1 className={styles.h1}>Pokemon ID Search</h1>
                            <div>
                            <Link href = "/index">
                                    <a className={styles.a}>Home</a>
                                </Link>
                                <br />
                                <Link href = "/name">
                                    <a className={styles.a}>Name</a>
                                </Link>
                                <br />
                                <Link href = "/type">
                                    <a className={styles.a}>Type</a>
                                </Link>
                            </div>
                            

                <p className={styles.p}>Search for Pokemon by ID#</p>
                <input type="text" id="pokeId"/>
                <button onClick = {() => {this.getId()}}>Search</button>
                <div className={styles.reporting} id="reportingArea"></div>
                </div>
                </div>
        )
    }
}

export default PokeId;