import { useState, useEffect } from 'react';
import styles from './/Form.module.css'
export default function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/7d1897c6-e72c-4c2d-b15a-36916776e5e7-loader.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])

    const handleSubmit = (e) => {
    }

    return (
        <div className={styles.form}>
            <header className="form-header">
                <p>Solicite seu orçamento de forma facilitada <br/>
                    me envie seu nome e email<br/>
                     e eu entrarei em contato
                </p>

                <form action= {handleSubmit}>
                    <p>
                        <label>
                            Nome:&nbsp; <br/>
                            <input
                                onChange={event => setName(event.target.value)}
                                value={name}
                                type="text"
                                name="name" />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email:&nbsp;&nbsp;<br/>
                            <input
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                                id="email"
                                name="email"
                                type="email" />
                        </label></p>
                     <button id='button' type="submit" value="Enviar">Solicitar orçamento</button>                     
                </form>
            </header>
        </div>
    );
}
