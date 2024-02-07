import logo from '../../../assets/Logo/Logo Novo Teste.jpg'
export default function About() {

  return (
    <div style={{fontFamily: 'monospace'}}>
      <img src={logo} alt='Disruptive records logo' style={{ maxWidth: "150px", marginTop: '50px', alignContent: "center" }} />
      <div>
        <h1>about dsptv records</h1>
        
        <p style={{fontWeight: "normal", fontSize: "1.2em"}}>
          contemporaneity's frontier is an unexplored, odd and uncommon place. among a cacophony of possibilities, listeners look for a shared and sensible understanding on music, a marginal lens to look through. between organic and digital sounds, unexpected beats that drives our minds and bodies. this is dsrptv rec.
        </p>

        <h3>
          record Label from brazil
        </h3>

        <p style={{fontWeight: "normal", fontSize: "1.1em"}}>
          artworks by Rollinos
        </p>

        <p style={{fontWeight: "normal", fontSize: "1.2em"}}>
          curated by Tha_Guts, A. Cittolin and Palmer
        </p>

        <h3>
          contact@dsrptvrec.com
        </h3>

        <h1 style={{fontSize: "3em"}}>
          demo policy
        </h1>

        <p style={{fontWeight: "normal", fontSize: "1.2em"}}>
          Please email <span style={{fontWeight: "bold"}}>demos@dsrptvrec.com</span> and remember to include contact details within the email. If we like it we will get in touch with you.
        </p>
        <br/>

      </div>
    </div>
  )
}
