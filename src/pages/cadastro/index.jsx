import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function CadastroPage() {
    return (
        <main className={styles.container}>
            <div className={styles.formSignin}>
                <form>
                    <img 
                        className="mb-4" 
                        src="https://lab365-admin.hml.sesisenai.org.br/javax.faces.resource/img/logo-lab.png" 
                        alt="lab 365"  
                        height="57" 
                    />
                    <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">lab365 &copy; 2024</p>
                    <p>Já possui cadastro ? <Link to={-1}>Efetuar login</Link></p>
                </form>
            </div>

        </main>
    )
}